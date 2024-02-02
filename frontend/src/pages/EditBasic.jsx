import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "@mui/material/Button";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

// Markdown viewer
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { usePagesContext } from "../contexts/PagesContext";

import { styleBackButton, styleSaveButton } from "../mUI_style";

function Basics() {
  const { basic, user } = useLoaderData();
  const [content, setContent] = useState(basic.content);

  const [basicDescription, setBasicDescription] = useState(basic.description);

  function isNoChanges() {
    if (basicDescription === basic.description && content === basic.content) {
      return true;
    }
    return false;
  }

  if (!user.login || !user.admin) window.location.href = "/login";
  else {
    const { setActiveButton } = usePagesContext();
    setActiveButton("/basics");

    const handleChange = (event) => {
      setBasicDescription(event.target.value);
    };

    const handleClickSubmitEdit = async () => {
      if (basicDescription && content) {
        const data = {
          description: basicDescription,
          content,
          name: basic.name,
        };
        try {
          const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/basics`,
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
              window.location.href = "/basics";
            }, 1600);
          }
        } catch (err) {
          toast.error("Erreur", {
            autoClose: 3000,
            hideProgressBar: false,
          });
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

    return (
      <div className="body-content keyword-detail">
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginBottom: "2rem",
          }}
        >
          {isNoChanges() ? (
            <Button
              variant="contained"
              sx={styleBackButton}
              component={Link}
              to="/basics"
            >
              <ArrowBackIosOutlinedIcon
                sx={{ marginRight: "0.5rem", fontSize: "medium" }}
              />
              retour
            </Button>
          ) : (
            <>
              <Button variant="contained" sx={styleBackButton}>
                <ClearOutlinedIcon
                  sx={{ marginRight: "0.5rem", fontSize: "medium" }}
                />
                annuler
              </Button>
              <Button
                variant="outlined"
                color="success"
                sx={styleSaveButton}
                onClick={handleClickSubmitEdit}
              >
                <SaveOutlinedIcon
                  sx={{ marginRight: "0.5rem", fontSize: "medium" }}
                />
                sauver
              </Button>
            </>
          )}
        </div>
        <FormControl variant="filled">
          <TextField
            variant="outlined"
            label="Description"
            name="description"
            value={basicDescription}
            onChange={handleChange}
            helperText={`${basic.description.length} / 200`}
            inputProps={{ maxLength: 200 }}
            sx={{ minWidth: "300px" }}
            size="small"
            multiline
          />
        </FormControl>
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
        <p
          style={{
            color: "grey",
            fontSize: "11px",
            margin: "8px 0 0 14px",
          }}
        >{`${basic.content.length} / 60000`}</p>
        <ToastContainer className="custom-toast" />
      </div>
    );
  }
}

export default Basics;
