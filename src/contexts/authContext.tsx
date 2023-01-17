import React, { ReactNode, useState } from "react";

interface IAuthProvider {
  children: ReactNode;
}

export const AuthContext = React.createContext({
  isAuthenticated: false,
  authenticate: () => {},
});

export function AuthProvider({ children }: IAuthProvider) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function authenticate() {
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
}
