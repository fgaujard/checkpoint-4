import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

// Markdown viewer
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { usePagesContext } from "../contexts/PagesContext";

import {
  navStyleButton,
  navActiveStyleButton,
  styleEditButton,
  divider,
} from "../mUI_style";

function Basics() {
  const { basics, user } = useLoaderData();

  if (!user.login) window.location.href = "/login";
  else {
    const { setActiveButton } = usePagesContext();
    setActiveButton("/basics");

    const [activeBasic, setActiveBasic] = useState(basics[0].name);

    const handleClick = (event) => {
      setActiveBasic(event.target.name);
    };

    return (
      <div className="body-content keyword-detail">
        <div>
          <Toolbar
            sx={{
              justifyContent: "space-around",
              borderRadius: "0.5rem",
              backgroundColor: "#292929",
              flexDirection: "row",
              height: "3.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={divider} />
            {basics.map((item) => {
              return (
                <>
                  <Button
                    color="inherit"
                    name={item.name}
                    sx={
                      activeBasic === item.name
                        ? navActiveStyleButton
                        : navStyleButton
                    }
                    onClick={handleClick}
                  >
                    {item.name}
                  </Button>
                  <div style={divider} />
                </>
              );
            })}
          </Toolbar>
        </div>
        {basics.map((item) => {
          if (item.name === activeBasic) {
            return (
              <>
                <div className="keyword-detail-header keyword-detail-category">
                  <p className="keyword-detail-desc">{item.description}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    {user.admin && (
                      <Button
                        variant="contained"
                        sx={styleEditButton}
                        component={Link}
                        to={`/basics-editor/${item.name}`}
                      >
                        <ModeEditOutlineOutlinedIcon
                          sx={{ marginRight: "0.5rem", fontSize: "medium" }}
                        />
                        modifier
                      </Button>
                    )}
                  </div>
                </div>
                <div data-color-mode="light">
                  <div style={{ height: "100%", overflow: "hidden" }}>
                    <MDEditor.Markdown
                      source={item.content}
                      style={{
                        height: "100%",
                        overflow: "hidden",
                        margin: "1rem 0 0 0",
                      }}
                    />
                  </div>
                </div>
              </>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default Basics;
