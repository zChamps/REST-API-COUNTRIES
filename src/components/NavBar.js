import styles from "./NavBar.module.css"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../Context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as iconeLuaSolid } from '@fortawesome/free-solid-svg-icons';
import { faMoon as iconeLuaRegular } from '@fortawesome/free-regular-svg-icons';


const NavBar = () => {
  const navigate = useNavigate()
  const { whiteTheme, setWhiteTheme } = useTheme();

  const handleColorPageClick = () => {
    setWhiteTheme(!whiteTheme)
  }

  return (
    <div className={whiteTheme ? styles.container_navLight : styles.container_navDark }>
        <h1 onClick={() => {
          navigate("/")
        }}>Where in the world?</h1>
         
        <span className={styles.span} onClick={handleColorPageClick}> <FontAwesomeIcon icon={whiteTheme ? iconeLuaSolid : iconeLuaRegular} style={ whiteTheme ? {color: 'black'} : {color: '#ffffff'}} />Dark Mode</span>
    </div>
  )
}

export default NavBar