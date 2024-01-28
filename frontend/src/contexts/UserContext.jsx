import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [userContext, setUserContext] = useState({ is_admin: false, role: "" });

  const value = useMemo(() => {
    return { userContext, setUserContext };
  }, [userContext, setUserContext]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
