const navStyleButton = {
  color: "#f6f6f6",
  minWidth: "1rem",
  backgroundColor: "#292929",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
};

const navActiveStyleButton = {
  minWidth: "1rem",
  color: "#292929",
  backgroundColor: "#f6f6f6",
  "&:hover": {
    backgroundColor: "#f6f6f6",
  },
};

const styleButton = {
  borderRadius: "12px",
  backgroundColor: "#292929",
  transition: "transform 250ms",
  "&:hover": {
    backgroundColor: "#292929",
    transform: "scale(0.9)",
  },
};

const favorite = {
  marginLeft: "0.5rem",
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
  borderRadius: "12px",
  color: "#292929",
  backgroundColor: "#e6e6e6",
  transition: "transform 250ms",
  "&:hover": {
    backgroundColor: "#e6e6e6",
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

const styleInput = {
  m: 1,
  width: "100%",
  margin: "0 0 1rem 0",
  "& label": {
    color: "black",
  },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiFilledInput-underline.Mui-error:after": {
    borderBottomColor: "black",
  },
  "& .MuiFilledInput-root": {
    borderRadius: "1rem 1rem 0 0",
  },
};

const divider = {
  width: "0.5px",
  height: "1rem",
  backgroundColor: "white",
  margin: "0 0.5rem 0 0.5rem",
};

export {
  navStyleButton,
  navActiveStyleButton,
  styleButton,
  styleBackButton,
  styleEditButton,
  styleSaveButton,
  styleDeleteButton,
  styleInput,
  favorite,
  divider,
};
