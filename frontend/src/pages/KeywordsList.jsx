// Import React here
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

// Import mUI components here
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { usePagesContext } from "../contexts/PagesContext";

// Import my component
import KeywordCard from "../components/keyword/KeywordCard";

// import additional style here
import "./styles/keywords-list.scss";

function mapKeywordList(keywords) {
  return keywords.map((keyword) => (
    <li key={keyword.ID} className="keyword-list-content">
      <KeywordCard
        ID={keyword.ID}
        title={keyword.title}
        acr={keyword.acr}
        desc={keyword.desc}
        content={keyword.content}
        category={keyword.category}
      />
    </li>
  ));
}

function KeywordsList() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/keywords");
  const allKeywordsList = useLoaderData()[0];
  const categories = useLoaderData()[1];

  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filteredKeywords = allKeywordsList.filter((keyword) => {
    const matchesFilter = filter ? keyword.category === filter : true;
    const matchesSearch = searchValue
      ? keyword.acr.toLowerCase().includes(searchValue.toLowerCase()) ||
        keyword.title.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    return matchesFilter && matchesSearch;
  });

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const value = event.category ? event.category.name : event.target.value;
    if (value === filter) {
      setFilter("");
    } else {
      setFilter(value);
    }
  };

  const styleButton = {
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
    <div className="body-content body-content-container">
      <div className="keywords-list-header-text">
        <p className="keywords-list-number">
          {filteredKeywords.length}{" "}
          {filteredKeywords.length > 1
            ? "mots-clés référencés 🚀"
            : "mot-clé référencé 🚀"}
        </p>
        <Button
          variant="contained"
          sx={styleButton}
          component={Link}
          to="/create-keyword"
        >
          ajouter
          <AddCircleOutlineOutlinedIcon sx={{ marginLeft: "0.5rem" }} />
        </Button>
      </div>
      <div className="keywords-list-header">
        <TextField
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Rechercher..."
          variant="outlined"
          size="small"
          sx={{ width: "200px", marginBottom: "1rem" }}
        />
        <Select
          displayEmpty
          size="small"
          sx={{
            margin: "0 0 2.5rem 0",
            width: "200px",
          }}
          value={filter}
          onChange={handleCategoryChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected || selected === "") {
              return <em style={{ color: "grey" }}>Filtrer par catégorie</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Filtres</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem
              key={category.id}
              value={category.name}
              onClick={() => handleCategoryChange({ category })}
            >
              <Checkbox checked={filter === category.name} />
              <ListItemText primary={category.name} />
            </MenuItem>
          ))}
        </Select>
      </div>
      <ul className="keywords-list">{mapKeywordList(filteredKeywords)}</ul>
    </div>
  );
}

export default KeywordsList;
