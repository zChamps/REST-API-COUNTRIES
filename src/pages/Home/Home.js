import styles from "./Home.module.css"
import { useFetch } from '../../Hooks/useFetch'
import CountryItem from '../../components/CountryItem'

const Home = () => {
  const url = "https://restcountries.com/v3.1/independent?status=true"
  const {data, loading} = useFetch(url)
  console.log(data)
  return (
    <>
    <div className={styles.containerSearcAndFilter}>
      <form>
        <input type="text" name="" id="" placeholder="Search for a country..." />
      </form>
      <div className={styles.subcontainerFilter}>
        <p>Filter by Region</p>
        <ul>
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