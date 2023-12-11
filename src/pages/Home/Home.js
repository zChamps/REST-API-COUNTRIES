import styles from "./Home.module.css"
import { useFetch } from '../../Hooks/useFetch'
import CountryItem from '../../components/CountryItem'
import { useState, useContext } from "react"
import { useSearchParams, redirect, Navigate } from 'react-router-dom';
import SearchForm from "../../components/SearchForm";
import { ContriesContext } from "../../Context/CountriesContext";

const Home = () => {
  const url = "https://restcountries.com/v3.1/independent?status=true"
  const {loading} = useFetch(url)
  
  const {allCountries} = useContext(ContriesContext)
  const [barraPesquisa, setBarraPesquisa] = useState(false)
  const [searchParams] = useSearchParams()
  
  
  const [classeAdicionada, setClasseAdicionada] = useState(false);

  const handleFilterContanier = () => {
    setBarraPesquisa(!barraPesquisa)
  }



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
    <div className={styles.containerHomeCountries}>
    {region && region.map((country, index )=> {
      return <CountryItem key={index} index={index} country={country}/>
    })}</div>
    
    setClasseAdicionada(true)
  }
  

  return (
    <>
    <div className={styles.containerSearcAndFilter}>
      <SearchForm/>
      <div className={styles.subcontainerFilter}>
        <p onClick={handleFilterContanier}>Filter by Region</p>
        <ul  style={barraPesquisa === false ? {display: "none"} : {display: "flex"}}>
          <li onClick={() => {handleRegionClick(Africa)}}>Africa</li>
          <li onClick={() => {handleRegionClick(Americas)}}>America</li>
          <li onClick={() => {handleRegionClick(Asia)}}>Asia</li>
          <li onClick={() => {handleRegionClick(Europe)}}>Europe</li>
          <li onClick={() => {handleRegionClick(Oceania)}}>Oceania</li>
        </ul>
      </div>
    </div>
    <div className={classeAdicionada ? styles.oculto : styles.containerHomeCountries}>
      {loading && <p>Carregando dados!!</p>}
      {allCountries && allCountries.map((country, index )=> {
        return <CountryItem key={index} index={index} country={country}/>
      })}
    </div>
    </>
  )
}

export default Home