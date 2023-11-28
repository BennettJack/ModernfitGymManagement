import React, { createContext, useState, useContext, useEffect } from 'react';
import userData from '../data/User-Accounts.json';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const authenticatedUser = userData.find((user) => user.username === username && user.password === password);

    if (authenticatedUser) {
        setUser(authenticatedUser);
      } 
      else {
        console.log('Authentication failed');
      }
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {

  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};