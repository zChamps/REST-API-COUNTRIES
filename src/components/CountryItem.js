import styles from "./CountryItem.module.css"

const CountryItem = ({country}) => {
  return (
    <div className={styles.containerGeral}>
        <img src={country.flags.png} alt={country.flags.alt} /> {/* Bandeira do país */}
        <div className={styles.subContainer}>
            <h4>{country.translations.por.common}</h4>  {/* Nome do país */}
            <p><span>Population:</span> {country.population}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital:</span> {country.capital[0]}</p>
        </div>
    </div>
  )
}

export default CountryItem