import React, { useEffect, useState } from 'react'

const UseFetch = (url, options = {}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await fetch(url, { ...options })
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            const result = await response.json()
            console.log(result)

            if (result) {
                setData(result)
                setError(null)
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
            setError(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data, 
        loading, 
        error
    }
}

export default UseFetch;