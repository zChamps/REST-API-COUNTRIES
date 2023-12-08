//2 - Criar a pagina de search
//3 - Criar a busca dos dados
import {useContext, useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {useFetch} from "../../Hooks/useFetch"
import { ContriesContext } from '../../Context/CountriesContext';
import { useQuery } from "../../Hooks/useQuery";
import CountryItem from '../../components/CountryItem';
import styles from "./Search.module.css"


const Search = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  
  //Obtendo o valor da query com o custom hook useQuery
  const query = useQuery();
  const search = query.get("q");
  
  
  const {allCountries} = useContext(ContriesContext)
  // console.log(allCountries)


  
useEffect(() => {
  const filterCountries = () => {
    const filtered = allCountries.filter((country) =>
      
    country.translations.por.common.toLowerCase().includes(search.toLowerCase())
  
  );
  console.log(filtered)
  setFilteredCountries(filtered);
  
};
  filterCountries()
  // console.log(filteredCountries)
  }, [allCountries])
  
  // console.log(items)
  return (
    <div className={styles.containerHomeCountries}>
        <ul className="products">
        {filteredCountries && filteredCountries.map(item => {
          
           return <CountryItem country={item}/>


  
        })}
    </ul>
    </div>
  )
}

export default Search