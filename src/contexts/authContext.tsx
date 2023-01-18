import React, { ReactNode, useState } from "react";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContext {
  isAuthenticated: boolean;
  authenticate: () => void;
}

export const AuthContext = React.createContext({} as IAuthContext);

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
