import { createContext, useState, useEffect } from "react";

export const ContriesContext = createContext();

export const ContriesContextProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://restcountries.com/v3.1/independent?status=true";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContriesContext.Provider value={{ allCountries }}>
      {children}
    </ContriesContext.Provider>
  );
};
