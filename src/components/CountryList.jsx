import React, { useEffect, useState } from 'react'
import { CountryCard } from './CountryCard'
import { useNavigate } from 'react-router-dom'

export const CountryList = () => {

    const navigate = useNavigate()

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').catch(err => {
            setError(err)
        }).then(res => res.json()).then(data => {
            setCountries(data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

  return (
  <div className='container'>
    
    {error && <h2>{error.message}</h2>}
    {
    !loading && countries.length
    ? 
        countries.map(country => <CountryCard  name={country.name.common} flag={country.flags.svg} handler={() => navigate(`/country/${country.name.common}`)} />) 
    : 
        !error ? <h2>Loading...</h2> : null
    }
  </div>
  )
}
