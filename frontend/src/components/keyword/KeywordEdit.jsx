// Import React here
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import mUI components here
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

// Markdown viewer
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// Import additional style here
import "../../pages/styles/keyword-detail.scss";

function KeywordEdit({ setIsEdit }) {
  const keyword = useLoaderData();
  const [allCategories, setAllCategories] = useState([]);

  const [editKeyword, setEditKeyword] = useState({
    title: keyword.title,
    acr: keyword.acr,
    desc: keyword.desc,
    id: keyword.ID,
  });
  const [content, setContent] = useState(keyword.content);
  const [category, setCategory] = useState(keyword.category);

  function isNoChanges() {
    if (
      editKeyword.title === keyword.title &&
      editKeyword.acr === keyword.acr &&
      editKeyword.desc === keyword.desc &&
      category === keyword.category &&
      content === keyword.content
    ) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAllCategories(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    setEditKeyword({
      ...editKeyword,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeCategory = (event) => {
    const value = event.item ? event.item.name : event.target.value;
    setCategory(value);
  };

  const handleSubmitEdit = async () => {
    if (
      editKeyword.title &&
      editKeyword.acr &&
      editKeyword.desc &&
      content &&
      category
    ) {
      const data = {
        title: editKeyword.title,
        acr: editKeyword.acr,
        desc: editKeyword.desc,
        content,
        category,
        id: editKeyword.id,
      };

      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/keyword-edit`,
          data,
          {
            withCredentials: true,
          }
        );
        if (response && response.status === 201) {
          toast.success("Vos modifications ont été effectués avec succès !", {
            autoClose: 1600,
            hideProgressBar: false,
          });
          setTimeout(() => {
            window.location.href = `/keywords/${data.title}`;
          }, 1600);
        }
      } catch (err) {
        toast.error(
          "Erreur : Vous essayez probablement de créer un mot-clé existant.",
          {
            autoClose: 3000,
            hideProgressBar: false,
          }
        );
      }
    } else {
      toast.error("Erreur: Certains champs sont vides.", {
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  };

  const handleConfirmationDelete = async () => {
    toast.dismiss();
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/keyword/${keyword.ID}`,
        {
          withCredentials: true,
        }
      );
      if (response && response.status === 201) {
        toast.success("Le mot-clé à été suprrimé avec succès !", {
          autoClose: 1600,
          hideProgressBar: false,
        });
        setTimeout(() => {
          window.location.href = "/keywords";
        }, 1500);
      }
    } catch (err) {
      toast.error("Erreur inconnue", {
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  };

  const handleCancellation = () => {
    toast.dismiss();
  };

  const handleSubmitDelete = () => {
    toast.warning(
      <div>
        <h3>Supprimer le mot-clé</h3>
        <p>Voulez-vous vraiment supprimer ce mot-clé ?</p>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleCancellation}
          >
            non
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={handleConfirmationDelete}
            sx={{ marginLeft: "1rem" }}
          >
            oui
          </Button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
      }
    );
  };

  const handleConfirmationBack = () => {
    setIsEdit(false);
  };

  const handleClickBack = () => {
    toast.warning(
      <div>
        <h3>Annuler les modifications</h3>
        <p>
          Voulez-vous vraiment arrêter les modifications ? (toute modification
          non enregistrée sera perdu)
        </p>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleCancellation}
          >
            non
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={handleConfirmationBack}
            sx={{ marginLeft: "1rem" }}
          >
            oui
          </Button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
      }
    );
  };

  const styleBackButton = {
    height: "2.5rem",
    borderRadius: "12px",
    backgroundColor: "#292929",
    transition: "transform 250ms",
    "&:hover": {
      backgroundColor: "#292929",
      transform: "scale(0.9)",
    },
  };

  const styleSaveButton = {
    height: "2.5rem",
    marginLeft: "1rem",
    borderRadius: "12px",
    transition: "transform 250ms",
    "&:hover": {
      transform: "scale(0.9)",
    },
  };

  const styleDeleteButton = {
    width: "9rem",
    marginTop: "2rem",
    borderRadius: "12px",
    transition: "transform 250ms",
    "&:hover": {
      transform: "scale(0.9)",
    },
  };

  return (
    <div className="body-content keyword-detail">
      <div className="keyword-detail-header">
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <FormControl variant="filled">
            <TextField
              variant="outlined"
              label="Titre ou Acronyme"
              name="title"
              value={editKeyword.title}
              helperText={`${editKeyword.title.length} / 25`}
              inputProps={{ maxLength: 25 }}
              onChange={handleChange}
              sx={{ minWidth: "300px" }}
              size="small"
            />
          </FormControl>
          <FormControl variant="filled">
            <TextField
              variant="outlined"
              label="Sous-titre"
              name="acr"
              value={editKeyword.acr}
              helperText={`${editKeyword.acr.length} / 40`}
              inputProps={{ maxLength: 40 }}
              onChange={handleChange}
              sx={{ minWidth: "300px" }}
              size="small"
            />
          </FormControl>
        </div>
        <div>
          {isNoChanges() ? (
            <Button
              variant="contained"
              sx={styleBackButton}
              onClick={handleConfirmationBack}
            >
              <ArrowBackIosOutlinedIcon
                sx={{ marginRight: "0.5rem", fontSize: "medium" }}
              />
              retour
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                sx={styleBackButton}
                onClick={handleClickBack}
              >
                <ClearOutlinedIcon
                  sx={{ marginRight: "0.5rem", fontSize: "medium" }}
                />
                annuler
              </Button>
              <Button
                variant="outlined"
                color="success"
                sx={styleSaveButton}
                onClick={handleSubmitEdit}
              >
                <SaveOutlinedIcon
                  sx={{ marginRight: "0.5rem", fontSize: "medium" }}
                />
                sauver
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="keyword-detail-header keyword-detail-category">
        <FormControl
          variant="filled"
          sx={{ marginTop: "1.5rem", marginBottom: "1rem", width: "100%" }}
        >
          <TextField
            variant="outlined"
            label="Description"
            name="desc"
            value={editKeyword.desc}
            helperText={`${editKeyword.desc.length} / 150`}
            inputProps={{ maxLength: 150 }}
            onChange={handleChange}
            size="small"
            multiline
          />
        </FormControl>
        <Select
          size="small"
          value={category}
          onChange={handleChangeCategory}
          input={<OutlinedInput />}
          sx={{ minWidth: "215px", textAlign: "left", marginLeft: "2rem" }}
          renderValue={(selected) => {
            return selected;
          }}
        >
          {allCategories.map((item) => (
            <MenuItem
              key={item.id}
              value={item.name}
              onClick={() => handleChangeCategory({ item })}
            >
              <Checkbox checked={category === item.name} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </div>
      <div data-color-mode="light">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                color: "grey",
                fontSize: "13px",
                marginLeft: "14px",
              }}
            >
              Markdown Editor
            </p>
            <p style={{ textAlign: "right", color: "grey", fontSize: "12px" }}>
              - modes de vues -
            </p>
          </div>
          <MDEditor
            height="100%"
            name="content"
            value={content}
            onChange={setContent}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          style={{
            color: "grey",
            fontSize: "11px",
            margin: "8px 0 0 14px",
          }}
        >{`${content.length} / 10000`}</p>

        <Button
          variant="outlined"
          color="error"
          sx={styleDeleteButton}
          onClick={handleSubmitDelete}
          startIcon={<DeleteIcon />}
        >
          supprimer
        </Button>
      </div>
      <ToastContainer className="custom-toast" />
    </div>
  );
}
KeywordEdit.propTypes = {
  setIsEdit: PropTypes.func.isRequired,
};

export default KeywordEdit;
