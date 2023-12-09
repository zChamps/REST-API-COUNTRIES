import { useContext } from 'react'
import styles from "./CountryDetails.module.css"
import { useParams, useNavigate } from 'react-router-dom'
import { ContriesContext } from '../../Context/CountriesContext'

const CountryDetails = () => {

  const { index } = useParams()
  const navigate = useNavigate()

  const { allCountries } = useContext(ContriesContext)

  const countryData = allCountries[index]
  console.log(countryData)

  //Bandeira: country.flags.png
  //Nome: country.translations.por.common
  //População: country.population
  // Regiao: country.region
  // Sub regiao: country.subregion
  // Capital: country.capital[0]
  // Top Level domain: country.tld[0]
  // Moeda: country.currencies.map(moeda => { <p>moeda.name</p> })
  // Linguagens: country.languages

  //Paises fronteira: country.borders.map(pais => {<p>pais</p>})

  countryData && console.log(countryData.name.nativeName[Object.keys(countryData.name.nativeName)].common)


  return (

    <div>
      {countryData && <div className={styles.ContainerGeral}>
        <button onClick={e => {
          e.preventDefault()
          navigate("/")
        }}>Back</button>
        <div className={styles.SubcontainerGeralPais}>
          <img src={countryData.flags.png} alt={countryData.flags.alt} />
          <div className={styles.ContainerDadosPais}>
            <p> {countryData.name.common}</p>
            <div>
              <div>
                <p> Native Name: {countryData.name.nativeName[Object.keys(countryData.name.nativeName)].common}</p>
                <p> Population {countryData.population}</p>
                <p> Region: {countryData.region}</p>
                <p> Sub Region: {countryData.subregion}</p>
                <p> Capital: {countryData.capital[0]}</p></div>
              <div>
                <p> Top Level Domain: {countryData.tld[0]}</p>
                <p> Currencies: {countryData.currencies[Object.keys(countryData.currencies)].name} </p>
                <p> Languages: {Object.keys(countryData.languages).map(language => {
                  return (countryData.languages[language])
                })}</p>
              </div>
            </div>

            <p> Border Countries:{countryData.borders.map(pais => {
              return <p> {pais}</p>
            })}</p>
          </div>

        </div>

      </div>}

    </div>
  )
}

export default CountryDetails