import { useState, useEffect } from "react"
import axios from "axios"

import MoonLoader from "react-spinners/MoonLoader"

const Pokemon = ({ pokemon }) => {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonImage = async (pokemon) => {
      const response = await axios.get(pokemon.url)
      setImageUrl(response.data.sprites.front_default)
      setTimeout(() => {
        setLoading(false)
      }, 100)
    }
    fetchPokemonImage(pokemon)
  }, [])

  return (
    <div className="p-6">
      <p className="text-2xl">{pokemon.name}</p>
      {loading ? (
        <MoonLoader color="#FA3232" />
      ) : (
        <img src={imageUrl} alt={pokemon.name}></img>
      )}
    </div>
  )
}
export default Pokemon
