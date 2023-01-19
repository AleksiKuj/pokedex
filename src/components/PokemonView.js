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

    const x = () => {
      setTimeout(() => {
        const elements = document.getElementsByClassName("pokemon-type")
        for (var i = 0; i < elements.length; i++) {
          switch (elements[i].innerHTML) {
            case "grass":
              elements[i].style.backgroundColor = "#9BCC50"
              break
            case "poison":
              elements[i].style.backgroundColor = "#B97FC9"
              break
            case "fire":
              elements[i].style.backgroundColor = "#F08030"
              break
            case "flying":
              elements[i].style.backgroundColor = "#8FAEC3"
              break
            case "water":
              elements[i].style.backgroundColor = "#6890F0"
              break
            case "normal":
              elements[i].style.backgroundColor = "#A8A878"
              break
            case "electric":
              elements[i].style.backgroundColor = "#F8D030"
              break
            case "ice":
              elements[i].style.backgroundColor = "#92C0BE"
              break
            case "fighting":
              elements[i].style.backgroundColor = "#C03028"
              break
            case "ground":
              elements[i].style.backgroundColor = "#E0C068"
              break
            case "bug":
              elements[i].style.backgroundColor = "#A8B820"
              break
            case "psychic":
              elements[i].style.backgroundColor = "#F85888"
              break
            case "rock":
              elements[i].style.backgroundColor = "#B8A038"
              break
            case "ghost":
              elements[i].style.backgroundColor = "#705898"
              break
            case "dark":
              elements[i].style.backgroundColor = "#705848"
              break
            case "dragon":
              elements[i].style.backgroundColor = "#7038F8"
              break
            case "steel":
              elements[i].style.backgroundColor = "#B8B8D0"
              break
            case "fairy":
              elements[i].style.backgroundColor = "#F0B6BC"
              break
            default:
              elements[i].style.backgroundColor = "black"
          }
        }
      }, 75)
    }
    x()
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
          <img
            src={pokemonUrl.sprites.other.dream_world.front_default}
            width={400}
            alt={pokemon.name}
          ></img>
        )}
        <div className="my-2">
          {pokemonUrl !== ""
            ? pokemonUrl.types.map((type) => (
                <span
                  key={type.type.name}
                  className="p-2 px-3 text-white rounded-md mx-2 pokemon-type"
                >
                  {type.type.name}
                </span>
              ))
            : null}
        </div>
        <div className="flex flex-col items-center py-2">
          <div>
            <span className="mx-2">Height</span>
            <span className="mx-2">Weight</span>
          </div>
          <div>
            <span className="mx-2">{pokemonUrl.height / 10} m</span>
            <span className="mx-2"> {pokemonUrl.weight / 10} kg</span>
          </div>
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
