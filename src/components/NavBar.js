import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.container_nav}>
        <h1>Where in the world?</h1>
        <span>Dark Mode</span>
    </div>
  )
}

export default NavBar