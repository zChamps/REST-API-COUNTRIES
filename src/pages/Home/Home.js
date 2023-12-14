import styles from "./Home.module.css"
import { useFetch } from '../../Hooks/useFetch'
import CountryItem from '../../components/CountryItem'
import { useState, useContext } from "react"
import { useSearchParams, redirect, Navigate } from 'react-router-dom';
import SearchForm from "../../components/SearchForm";
import { ContriesContext } from "../../Context/CountriesContext";
import { useTheme } from "../../Context/ThemeContext";

import { faChevronDown as iconeSetaSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Home = () => {
  const url = "https://restcountries.com/v3.1/independent?status=true"
  const {loading} = useFetch(url)
  
  const {allCountries} = useContext(ContriesContext)
  const [barraPesquisa, setBarraPesquisa] = useState(false)
  const [searchParams] = useSearchParams()
  
  
  const [classeAdicionada, setClasseAdicionada] = useState(false);


  const { whiteTheme} = useTheme();





  const handleFilterContanier = () => {
    setBarraPesquisa(!barraPesquisa)
  }

  const [countriesByRegion, setCountriesByRegion] = useState([]);

  //Paises filtrados por continente
  const Africa = allCountries.filter(country => {
    return country.region === "Africa"
  })

  const Oceania = allCountries.filter(country => {
    return country.region === "Oceania"
  })

  const Europe = allCountries.filter(country => {
    return country.region === "Europe"
  })

  const Asia = allCountries.filter(country => {
    return country.region === "Asia"
  })

  const Americas = allCountries.filter(country => {
    return country.region === "Americas"
  })



  const handleRegionClick = (region) => {
    setCountriesByRegion(region);
    setClasseAdicionada(true);
  };
  

  return (
    <>
    <div className={whiteTheme ? styles.containerSearcAndFilterLight : styles.containerSearcAndFilterDark}>
      <SearchForm/>
      <div className={whiteTheme ? styles.subcontainerFilterLight : styles.subcontainerFilterDark}>
        <div onClick={handleFilterContanier}><p>Filter by Region</p><FontAwesomeIcon className={styles.icon} icon={iconeSetaSolid} style={ whiteTheme ? {color: 'black'} : {color: '#ffffff'}} size='lg' /></div>
        <ul  style={barraPesquisa === false ? {display: "none"} : {display: "flex"}}>
          <li onClick={() => {handleRegionClick(Africa)}}>Africa</li>
          <li onClick={() => {handleRegionClick(Americas)}}>America</li>
          <li onClick={() => {handleRegionClick(Asia)}}>Asia</li>
          <li onClick={() => {handleRegionClick(Europe)}}>Europe</li>
          <li onClick={() => {handleRegionClick(Oceania)}}>Oceania</li>
        </ul>
      </div>
    </div>
    <div className={whiteTheme ? styles.containerHomeCountriesLight : styles.containerHomeCountriesDark}>
        {loading && <p>Carregando dados!!</p>}
        {countriesByRegion.length > 0
          ? countriesByRegion.map((country) => (
              <CountryItem key={allCountries.indexOf(country)} index={allCountries.indexOf(country)} country={country} />
            ))
          : allCountries.map((country, index) => (
              <CountryItem key={index} index={index} country={country} />
            ))}
      </div>
    </>
  )
}

export default Home