import { createContext, useContext, useState  } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [whiteTheme, setWhiteTheme] = useState(false);
  
    const toggleTheme = () => {
      setWhiteTheme( !whiteTheme ? false : true);
    };
  
    return (
      <ThemeContext.Provider value={{ whiteTheme, setWhiteTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = () => {
    return useContext(ThemeContext);
  };