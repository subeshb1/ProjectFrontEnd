import React, { useState, createContext, useEffect, useContext } from "react";
import Auth from "lib/auth";
import { LoadContext } from "../LoadBar";

const AuthContext = createContext({ loggedIn: false, role: null, token: null });

function AuthProvider({ children }) {
  const [role, setRole] = useState(null);
  const {setLoading} = useContext(LoadContext);
  const handleOnChange = () => {
    setLoading(true)
    Auth.getRole().then(setRole).then(() => setLoading(false));
  };
  useEffect(() => {
    handleOnChange();
    window.addEventListener("storage_change", handleOnChange);
  }, []);

  return (
    <AuthContext.Provider value={{ role }}>{children}</AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;  
