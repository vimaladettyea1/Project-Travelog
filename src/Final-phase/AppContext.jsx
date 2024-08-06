
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [compactView, setCompactView] = useState(false);

  const handleCompactView = () => {
    setCompactView((prevState) => !prevState);
  };

  return (
    <AppContext.Provider value={{ compactView, handleCompactView }}>
      {children}
    </AppContext.Provider>
  );
};
