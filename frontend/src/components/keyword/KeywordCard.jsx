import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from "@mui/material/Checkbox";

import "../styles/keyword-card.scss";

function KeywordCard({ ID, title, acr, desc, category }) {
  const styleButton = {
    height: "2.5rem",
    width: "8rem",
    borderRadius: "12px",
    background: "linear-gradient(145deg, #2c2c2c, #252525)",
    boxShadow: "3px 3px 6px #c4c4c4, -3px -3px 6px #ffffff",
    transition: "transform 250ms",
    "&:hover": {
      backgroundColor: "#292929",
      transform: "scale(0.9)",
    },
  };

  return (
    <div key={ID} className="keyword-card">
      <div>
        <div className="keyword-card-head">
          <h2 className="keyword-card-title">{title}</h2>

          <h3 className="keyword-card-acronyme">{acr}</h3>
        </div>
        <p className="keyword-card-description">{desc}</p>
      </div>
      <div className="keyword-card-foot ">
        <h4 className="keyword-card-category">{category}</h4>
        <div className="keyword-card-title-right">
          <Checkbox
            sx={{
              marginRight: "0.5rem",
              height: "2rem",
              width: "2rem",
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
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
          <div className="keyword-card-button">
            <Button
              variant="contained"
              sx={styleButton}
              component={Link}
              to={`/keywords/${title}`}
            >
              voir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

KeywordCard.propTypes = {
  ID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  acr: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default KeywordCard;
