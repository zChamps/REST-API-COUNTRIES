import {useNavigate } from "react-router-dom"
import styles from "./CountryItem.module.css"
import { useTheme } from "../Context/ThemeContext";




const CountryItem = ({country, index}) => {
  const { whiteTheme } = useTheme();
  const navigate = useNavigate();

  const handleRedirectDetailPage = (index) =>{
    const url = `/details/${index}`
    navigate(url)
  }

  return (
    <div onClick={() => handleRedirectDetailPage(index)} className={whiteTheme ? styles.containerGeralLight : styles.containerGeralDark}>
        <img src={country.flags.png} alt={country.flags.alt} /> {/* Bandeira do país */}
        <div className={styles.subContainer}>
            <h4>{country.name.common}</h4>  {/* Nome do país */}
            <p><span>Population:</span> {country.population}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital:</span> {country.capital[0]}</p>
        </div>
    </div>
  )
}

export default CountryItem