import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"

const Pokemon = ({ pokemon }) => {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonImage = async (pokemon) => {
      const response = await axios.get(pokemon.url)
      setImageUrl(response.data.sprites.front_default)
      setTimeout(() => {
        setLoading(false)
      }, 200)
    }
    fetchPokemonImage(pokemon)
  }, [])

  return (
    <div className="p-6 text-center">
      <Link to={`pokemons/${pokemon.name}`}>
        <p className="text-2xl">{`${pokemon.name
          .charAt(0)
          .toUpperCase()}${pokemon.name.slice(1)}`}</p>
        {loading ? (
          <ClipLoader color="#D70040" />
        ) : (
          <img src={imageUrl} alt={pokemon.name}></img>
        )}
      </Link>
    </div>
  )
}
export default Pokemon
