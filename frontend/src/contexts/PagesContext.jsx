import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const PagesContext = createContext(null);
export const usePagesContext = () => useContext(PagesContext);

export function PagesProvider({ children }) {
  const [activeButton, setActiveButton] = useState("");

  const handleClickPage = (buttonName) => {
    setActiveButton(buttonName);
  };

  const value = useMemo(() => {
    return { activeButton, setActiveButton, handleClickPage };
  }, [activeButton, setActiveButton, handleClickPage]);

  return (
    <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
  );
}

PagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
