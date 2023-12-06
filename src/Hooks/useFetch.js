import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch(url)
            const dados = await res.json()

            setData(dados)
            setLoading(false)
        }

        fetchData()
    }, [url])
    // console.log(data)
    return { data, loading }
}