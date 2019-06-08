import React, { useState, createContext, useEffect } from "react";
import Auth from "lib/auth";

const AuthContext = createContext({ loggedIn: false, role: null, token: null });

function AuthProvider({ children }) {
  const [role, setRole] = useState(null);
  const handleOnChange = () => {
    Auth.getRole().then(setRole)
  }
  useEffect(() => {
    handleOnChange();
    window.addEventListener('storage_change',handleOnChange);
    return 
  },[1]);
  

  
  return (
    <AuthContext.Provider value={{ role }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
