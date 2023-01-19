import { useMatch, Link } from "react-router-dom"
import Button from "./Button"
import { useState, useEffect } from "react"
import axios from "axios"
import { ClipLoader } from "react-spinners"

//DOESNT WORK ON PAGE REFRESH
const PokemonView = ({ pokemons }) => {
  const [pokemonUrl, setPokemonUrl] = useState("")
  const [loading, setLoading] = useState(true)

  const match = useMatch("/pokemons/:name")
  const pokemon = match
    ? pokemons.find((pokemon) => pokemon.name === match.params.name)
    : null
  useEffect(() => {
    const fetchPokemonImage = async (pokemon) => {
      const response = await axios.get(pokemon.url)
      setPokemonUrl(response.data)
      setLoading(false)
      // console.log(pokemonUrl.abilities)
      // console.log(pokemonUrl.abilities.map((ability) => ability.ability.name))
    }
    fetchPokemonImage(pokemon)
  }, [])

  if (!pokemon) {
    return null
  }

  return (
    <div>
      <div className="flex flex-col items-center pt-3">
        <Link to={"/"}>
          <Button buttonText="Back"></Button>
        </Link>
        <p className="text-2xl font-semibold py-2">
          {`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}{" "}
          <span>#{pokemonUrl.id}</span>
        </p>
        {loading ? (
          <ClipLoader color="#D70040" />
        ) : (
          <img src={pokemonUrl.sprites.front_default} alt={pokemon.name}></img>
        )}
        <div>
          {pokemonUrl !== ""
            ? pokemonUrl.types.map((type) => (
                <span key={type.type.name} className="p-2">
                  {type.type.name}
                </span>
              ))
            : null}
        </div>
        <div>
          <span className="p-2">{pokemonUrl.height / 10} m</span>
          <span className="p-2"> {pokemonUrl.weight / 10} kg</span>
        </div>
        <div className="flex">
          <div>
            <p className="font-semibold">Base stats</p>
            {pokemonUrl !== ""
              ? pokemonUrl.stats.map((stat) => (
                  <p key={stat.stat.name}>
                    <span>{stat.stat.name} </span>
                    <span>{stat.base_stat}</span>
                  </p>
                ))
              : null}
          </div>
          <div>
            <p className="font-semibold">Abilities:</p>
            {pokemonUrl !== ""
              ? pokemonUrl.abilities.map((ability) => (
                  <p key={ability.ability.name}>{ability.ability.name}</p>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonView
