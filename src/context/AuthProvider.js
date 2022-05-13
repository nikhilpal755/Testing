import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const user = localStorage.user
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const [auth, setAuth] = useState(user);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
