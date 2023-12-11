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



  countryData && console.log(countryData)

















  // BRASIL NÃO FUNCIONA:                 <p> <span className={styles.negrito}> Currencies:</span> {countryData.currencies[Object.keys(countryData.currencies)[1]].name} </p>







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
            <p> <span className={styles.negrito}> {countryData.name.common}</span></p>
            <div className={styles.dadosPais}>
              <div className={styles.subContainerDadosPais}>
                <p> <span className={styles.negrito}> Native Name:</span> {countryData.name.nativeName[Object.keys(countryData.name.nativeName)[0]].common}</p>
                <p> <span className={styles.negrito}> Population:</span> {countryData.population.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
                <p> <span className={styles.negrito}> Region:</span> {countryData.region}</p>
                <p> <span className={styles.negrito}> Sub Region:</span> {countryData.subregion}</p>
                <p> <span className={styles.negrito}> Capital:</span> {countryData.capital[0]}</p></div>
              <div className={styles.subContainerDadosPais}>
                <p> <span className={styles.negrito}> Top Level Domain:</span> {countryData.tld[0]}</p>
                <p> <span className={styles.negrito}> Currencies:</span> {countryData.currencies[Object.keys(countryData.currencies)[0]].name} </p>
                <p> <span className={styles.negrito}>Languages:</span> {Object.keys(countryData.languages).map(language => {
                  return <span> {countryData.languages[language]}, </span>
                })} </p>
              </div>
            </div>

            <div className={styles.teste}>
              <div className={styles.teste}>
                <p className={styles.negrito}>Border Countries:</p>
                {countryData.borders ? (
                  <div className={styles.containerPaisesDivisa}>
                    {countryData.borders.map(pais => (
                      <span className={styles.paisDivisa} key={pais}>{pais}</span>
                    ))}
                  </div>
                ) : (
                  <div className={styles.containerPaisesDivisa}>
                    <p className={styles.paisDivisa}>Without Info</p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>}

    </div>
  )
}

export default CountryDetails