import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { faMagnifyingGlass as iconeLupaSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./SearchForm.module.css"

import { useTheme } from "../Context/ThemeContext";


// Passo 1, criando o formulário de pesquisa na pagina

const SearchForm = () => {
    const { whiteTheme } = useTheme();
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = e => {
        e.preventDefault()

        navigate("/search?q=" + query)
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className={ whiteTheme ? styles.containerMainLight : styles.containerMainDark}>
            <FontAwesomeIcon className={styles.icon} icon={iconeLupaSolid} style={ whiteTheme ? {color: 'black'} : {color: '#ffffff'}} size='lg' />
            <input type="text" onChange={e => setQuery(e.target.value)}  placeholder="Search for a country by name..." />
            </div>
        </form>

    )
}

export default SearchForm