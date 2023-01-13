import React, { ReactNode } from "react";

interface IAuthProvider {
  children: ReactNode;
}

export const AuthContext = React.createContext({ auth: false });

export function AuthProvider({ children }: IAuthProvider) {
  const auth = false;
  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
}
