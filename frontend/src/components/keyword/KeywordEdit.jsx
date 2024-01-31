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

import {
  styleBackButton,
  styleSaveButton,
  styleDeleteButton,
} from "../../mUI_style";

// Import additional style here
import "../../pages/styles/keyword-detail.scss";

function KeywordEdit({ setIsEdit }) {
  const { keyword, user } = useLoaderData();

  const [editKeyword, setEditKeyword] = useState({
    acronyme: keyword.acronyme,
    name: keyword.name,
    description: keyword.description,
    id: keyword.id,
  });

  const [content, setContent] = useState(keyword.content);
  const [category, setCategory] = useState(keyword.category);

  function isNoChanges() {
    if (
      editKeyword.acronyme === keyword.acronyme &&
      editKeyword.name === keyword.name &&
      editKeyword.description === keyword.description &&
      category === keyword.category &&
      content === keyword.content
    ) {
      return true;
    }
    return false;
  }

  if (!user.login || !user.admin) window.location.href = "/login";
  else {
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setAllCategories(data));
    }, []);

    const handleChange = (event) => {
      setEditKeyword({
        ...editKeyword,
        [event.target.name]: event.target.value,
      });
      console.info(editKeyword);
    };

    const handleChangeCategory = (event) => {
      const value = event.item ? event.item.name : event.target.value;
      setCategory(value);
    };

    const handleSubmitEdit = async () => {
      if (
        editKeyword.acronyme &&
        editKeyword.name &&
        editKeyword.description &&
        content &&
        category &&
        content.length <= 10000
      ) {
        const data = {
          acronyme: editKeyword.acronyme,
          name: editKeyword.name,
          description: editKeyword.description,
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
              window.location.href = `/keywords/${data.acronyme}`;
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
        toast.error(
          content.length > 10000
            ? "Erreur: Votre Mardwon est trop long."
            : "Erreur: Certains champs sont vides.",
          {
            autoClose: 3000,
            hideProgressBar: false,
          }
        );
      }
    };

    const handleConfirmationDelete = async () => {
      toast.dismiss();
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/keyword/${keyword.id}`,
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

    return (
      <div className="body-content keyword-detail">
        <div className="keyword-detail-header">
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <FormControl variant="filled">
              <TextField
                variant="outlined"
                label="Titre ou Acronyme"
                name="acronyme"
                value={editKeyword.acronyme}
                helperText={`${editKeyword.acronyme.length} / 15`}
                inputProps={{ maxLength: 15 }}
                onChange={handleChange}
                sx={{ minWidth: "300px" }}
                size="small"
              />
            </FormControl>
            <FormControl variant="filled">
              <TextField
                variant="outlined"
                label="Sous-titre"
                name="name"
                value={editKeyword.name}
                helperText={`${editKeyword.name.length} / 50`}
                inputProps={{ maxLength: 50 }}
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
              name="description"
              value={editKeyword.description}
              helperText={`${editKeyword.description.length} / 150`}
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
              <p
                style={{
                  textAlign: "right",
                  color: "grey",
                  fontSize: "12px",
                }}
              >
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
}
KeywordEdit.propTypes = {
  setIsEdit: PropTypes.func.isRequired,
};

export default KeywordEdit;
