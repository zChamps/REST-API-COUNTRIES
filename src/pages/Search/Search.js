//2 - Criar a pagina de search
//3 - Criar a busca dos dados
import {useContext, useEffect, useState} from 'react'
import { ContriesContext } from '../../Context/CountriesContext';
import { useQuery } from "../../Hooks/useQuery";
import CountryItem from '../../components/CountryItem';
import styles from "./Search.module.css"


const Search = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [indexFilteredCountries, setIndexFilteredCountries] = useState([])
  const [filteredCountriesAndIndex, setFilteredCountriesAndIndex] = useState([])

  
  //Obtendo o valor da query com o custom hook useQuery
  const query = useQuery();
  const search = query.get("q");
  
  
  const {allCountries} = useContext(ContriesContext)
  // console.log(allCountries)


  
useEffect(() => {
  const filterCountries = () => {
    const filtered = allCountries.filter((country) =>
    
    country.name.common.toLowerCase().includes(search.toLowerCase())
    
    );
    const selectedItemAndIndex = filtered.map((item) => [allCountries.indexOf(item), item]);

  if (filtered.length > 0) {
    
 
    setFilteredCountriesAndIndex(selectedItemAndIndex)
  }
};
filterCountries()
// console.log(filteredCountries)
}, [allCountries])
// console.log(filteredCountriesAndIndex)
// console.log(indexFilteredCountries)





  return (
    <div className={styles.containerHomeCountries}>
        {filteredCountriesAndIndex && filteredCountriesAndIndex.map((data) => {
          // console.log(data)

           return <CountryItem index={data[0]}  country={data[1]}/>


  
        })}
    </div>
  )
}

export default Search