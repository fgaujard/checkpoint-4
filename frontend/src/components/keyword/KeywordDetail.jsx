// Import React here
import { Link, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

// Import mUI components here
import Button from "@mui/material/Button";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from "@mui/material/Checkbox";

// Markdown viewer
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { usePagesContext } from "../../contexts/PagesContext";

import { styleBackButton } from "../../mUI_style";

// Import additional style here
import "../../pages/styles/keyword-detail.scss";

function KeywordDetail({ setIsEdit }) {
  const { keyword, user } = useLoaderData();
  const { setActiveButton } = usePagesContext();
  const [isFav, setIsFav] = useState(false);

  const { id } = keyword;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/keyfav/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) setIsFav(true);
      });
  }, []);

  const handleClickFav = () => {
    if (isFav === false) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/keyfav`,
          { id },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 201) setIsFav(true);
        });
    } else {
      axios
        .delete(`${import.meta.env.VITE_BACKEND_URL}/api/keyfav/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 201) setIsFav(false);
        });
    }
  };

  setActiveButton("/keywords");

  const handleClick = () => {
    setIsEdit(true);
  };

  const styleEditButton = {
    height: "2.5rem",
    marginRight: "1rem",
    borderRadius: "12px",
    color: "#292929",
    backgroundColor: "#e6e6e6",
    transition: "transform 250ms",
    "&:hover": {
      backgroundColor: "#e6e6e6",
      transform: "scale(0.9)",
    },
  };

  return (
    <div className="body-content keyword-detail">
      <div className="keyword-detail-header">
        <div>
          <h2 className="keyword-detail-title">{keyword.acronyme}</h2>
          <h3>{keyword.name}</h3>
        </div>
        <div>
          {user.admin && (
            <Button
              variant="contained"
              sx={styleEditButton}
              onClick={handleClick}
            >
              <ModeEditOutlineOutlinedIcon
                sx={{ marginRight: "0.5rem", fontSize: "medium" }}
              />
              modifier
            </Button>
          )}

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
          <Checkbox
            sx={{
              marginLeft: "1rem",
              height: "2.5rem",
              width: "2.5rem",
              color: "#e6e6e6",
              borderRadius: "12px",
              background: "linear-gradient(145deg, #2c2c2c, #252525)",
              boxShadow: "3px 3px 6px #c4c4c4, -3px -3px 6px #ffffff",
              transition: "transform 250ms",
              "&:hover": {
                backgroundColor: "#292929",
                transform: "scale(0.9)",
              },
            }}
            checked={isFav}
            onClick={handleClickFav}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon sx={{ color: "#e6e6e6" }} />}
          />
        </div>
      </div>
      <div className="keyword-detail-header keyword-detail-category">
        <p className="keyword-detail-desc">{keyword.description}</p>
        <h4 className="keyword-detail-category-text">
          Catégorie : {keyword.category}
        </h4>
      </div>
      <div data-color-mode="light">
        <div style={{ height: "100%", overflow: "hidden" }}>
          <MDEditor.Markdown
            source={keyword.content}
            style={{
              height: "100%",
              overflow: "hidden",
              margin: "1rem 0 0 0",
            }}
          />
        </div>
      </div>
    </div>
  );
}
KeywordDetail.propTypes = {
  setIsEdit: PropTypes.func.isRequired,
};

export default KeywordDetail;
