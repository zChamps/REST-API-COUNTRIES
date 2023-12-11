import styles from "./NavBar.module.css"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate()


  return (
    <div className={styles.container_nav}>
        <h1 onClick={() => {
          navigate("/")
        }}>Where in the world?</h1>
        <span>Dark Mode</span>
    </div>
  )
}

export default NavBar