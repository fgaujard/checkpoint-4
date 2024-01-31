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

export { styleBackButton, styleSaveButton, styleDeleteButton };
