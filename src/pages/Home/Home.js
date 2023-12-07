import styles from "./Home.module.css"
import { useFetch } from '../../Hooks/useFetch'
import CountryItem from '../../components/CountryItem'
import { useState } from "react"
import { useSearchParams } from 'react-router-dom';
import SearchForm from "../../components/SearchForm";

const Home = () => {
  const url = "https://restcountries.com/v3.1/independent?status=true"
  const {data, loading} = useFetch(url)
  const [barraPesquisa, setBarraPesquisa] = useState(false)
  const [searchParams] = useSearchParams()
  console.log(data)

  const handleFilterContanier = () => {
    setBarraPesquisa(!barraPesquisa)
  }

  return (
    <>
    <div className={styles.containerSearcAndFilter}>
      <SearchForm/>
      <div className={styles.subcontainerFilter}>
        <p onClick={handleFilterContanier}>Filter by Region</p>
        <ul  style={barraPesquisa === false ? {display: "none"} : {display: "flex"}}>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
    <div className={styles.containerHomeCountries}>
      {loading && <p>Carregando dados!!</p>}
      {data && data.map(country => {
        return <CountryItem country={country}/>
      })}
    </div>
    </>
  )
}

export default Home