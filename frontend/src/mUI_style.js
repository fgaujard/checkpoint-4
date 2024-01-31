const styleButton = {
  borderRadius: "12px",
  backgroundColor: "#292929",
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

export {
  styleButton,
  styleBackButton,
  styleSaveButton,
  styleDeleteButton,
  styleInput,
};
