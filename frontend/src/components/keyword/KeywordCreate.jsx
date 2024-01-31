// Import React here
import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
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
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

// Markdown viewer
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { usePagesContext } from "../../contexts/PagesContext";

// Import additional style here
import "../../pages/styles/keyword-detail.scss";

function KeywordCreate() {
  const user = useLoaderData();

  const [newKeyword, setNewKeyword] = useState({
    acronyme: "",
    name: "",
    description: "",
  });

  const [content, setContent] = useState("");

  const [category, setCategory] = useState("");

  function isNoContent() {
    if (
      !newKeyword.acronyme &&
      !newKeyword.acr &&
      !newKeyword.description &&
      !category &&
      !content
    ) {
      return true;
    }
    return false;
  }

  if (!user.login || !user.admin) window.location.href = "/login";
  else {
    const { setActiveButton } = usePagesContext();
    const [allCategories, setAllCategories] = useState([]);

    setActiveButton("/keywords");

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
      setNewKeyword({
        ...newKeyword,
        [event.target.name]: event.target.value,
      });
    };

    const handleChangeCategory = (event) => {
      let value = "";
      if (event && event.item && event.item.id) {
        value = event.item.id;
      } else if (event && event.target && event.target.value) {
        value = event.target.value;
      }
      setCategory(value);
    };

    const handleSubmitCreate = async () => {
      if (
        newKeyword.acronyme &&
        newKeyword.name &&
        newKeyword.description &&
        content &&
        category
      ) {
        const data = {
          acronyme: newKeyword.acronyme,
          name: newKeyword.name,
          description: newKeyword.description,
          content,
          category,
        };

        console.info(data.category);
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/keyword-create`,
            data,
            {
              withCredentials: true,
            }
          );
          if (response && response.status === 201) {
            toast.success("Votre mot-clé à été ajouté avec succès !", {
              autoClose: 1500,
              hideProgressBar: false,
            });
            setTimeout(() => {
              window.location.href = `/keywords/${data.acronyme}`;
            }, 1500);
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

    const handleCancellation = () => {
      toast.dismiss();
    };

    const handleClickBack = () => {
      toast.warning(
        <div>
          <h3>Annuler la création</h3>
          <p>
            Voulez-vous vraiment annuler ? (toute modification non enregistrée
            sera perdu)
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
              component={Link}
              to="/keywords"
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

    return (
      <div className="body-content keyword-detail">
        <div className="keyword-detail-header">
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <FormControl variant="filled">
              <TextField
                variant="outlined"
                label="Titre ou Acronyme"
                name="acronyme"
                value={newKeyword.acronyme}
                helperText={`${newKeyword.acronyme.length} / 25`}
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
                name="name"
                value={newKeyword.name}
                helperText={`${newKeyword.name.length} / 40`}
                inputProps={{ maxLength: 40 }}
                onChange={handleChange}
                sx={{ minWidth: "300px" }}
                size="small"
              />
            </FormControl>
          </div>
          <div>
            {isNoContent() ? (
              <Button
                variant="contained"
                sx={styleBackButton}
                component={Link}
                to="/keywords"
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
                  onClick={handleSubmitCreate}
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
            sx={{ marginTop: "1.5rem", width: "100%" }}
          >
            <TextField
              variant="outlined"
              label="Description"
              name="description"
              value={newKeyword.description}
              helperText={`${newKeyword.description.length} / 150`}
              inputProps={{ maxLength: 150 }}
              onChange={handleChange}
              size="small"
              multiline
            />
          </FormControl>
          <Select
            displayEmpty
            size="small"
            sx={{ minWidth: "215px", textAlign: "left", marginLeft: "2rem" }}
            value={category}
            onChange={handleChangeCategory}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (!selected || selected === "") {
                return <em style={{ color: "grey" }}>Ajouter une catégorie</em>;
              }
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
                  fontSize: "12px",
                  margin: "1rem 0 12px 15px",
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
        <p
          style={{
            color: "grey",
            fontSize: "11px",
            margin: "8px 0 0 14px",
          }}
        >{`${content.length} / 10000`}</p>
        <ToastContainer className="custom-toast" />
      </div>
    );
  }
}

export default KeywordCreate;
