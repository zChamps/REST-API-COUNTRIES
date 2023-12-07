import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Passo 1, criando o formulário de pesquisa na pagina

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = e => {
        e.preventDefault()

        navigate("/search?q=" + query)
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setQuery(e.target.value)}  placeholder="Search for a country by name..." />
        </form>

    )
}

export default SearchForm