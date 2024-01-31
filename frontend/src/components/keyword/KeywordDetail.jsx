// Import React here
import { Link, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

// Import mUI components here
import Button from "@mui/material/Button";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

// Markdown viewer
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { usePagesContext } from "../../contexts/PagesContext";

// Import additional style here
import "../../pages/styles/keyword-detail.scss";

function KeywordDetail({ setIsEdit }) {
  const { keyword, user } = useLoaderData();
  const { setActiveButton } = usePagesContext();

  setActiveButton("/keywords");

  const handleClick = () => {
    setIsEdit(true);
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
