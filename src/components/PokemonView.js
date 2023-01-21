import { useMatch, Link } from "react-router-dom"
import Button from "./Button"
import { useState, useEffect } from "react"
import axios from "axios"
import { ClipLoader } from "react-spinners"
import ProgressBar from "./ProgressBar"

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
    }
    fetchPokemonImage(pokemon)

    const applyTypeColors = () => {
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

    const applyBarColors = () => {
      setTimeout(() => {
        const elements = document.getElementsByClassName("pokemon-stat-type")
        const temp = document.getElementsByClassName("stat-fill")
        for (var i = 0; i < elements.length; i++) {
          switch (elements[i].innerHTML.toLowerCase()) {
            case "hp":
              temp[i].style.backgroundColor = "#FF0000"
              break
            case "attack":
              temp[i].style.backgroundColor = "#F08030"
              break
            case "defense":
              temp[i].style.backgroundColor = "#F8D030"
              break
            case "special-attack":
              temp[i].style.backgroundColor = "#6890F0"
              break
            case "special-defense":
              temp[i].style.backgroundColor = "#78C850"
              break
            case "speed":
              temp[i].style.backgroundColor = "#F85888"
              break
            default:
          }
        }
      }, 100)
    }

    applyTypeColors()
    applyBarColors()
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

        <div className="flex flex-col md:flex-row items-center">
          <div className="order-2 md:order-1">
            <div className="">
              <p className="font-semibold text-center">Base stats</p>
              {pokemonUrl !== ""
                ? pokemonUrl.stats.map((stat) => (
                    <ProgressBar
                      key={stat.stat.name}
                      value={stat.base_stat}
                      text={stat.stat.name}
                    />
                  ))
                : null}
            </div>
          </div>

          <div className="order-1 md:order-2">
            {loading ? (
              <ClipLoader color="#D70040" />
            ) : (
              <img
                src={pokemonUrl.sprites.other.home.front_default}
                width={400}
                alt={pokemon.name}
              ></img>
            )}
          </div>
          <div className="flex justify-center order-3">
            <div className="my-2 text-center">
              <table className="border-separate border-spacing-y-3 ">
                <tbody>
                  <tr className="my-2">
                    <td className="font-semibold">Height</td>
                    <td>{pokemonUrl.height / 10} m</td>
                  </tr>
                  <tr className="py-5">
                    <td className="font-semibold">Weight</td>
                    <td>{pokemonUrl.weight / 10} kg</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Type</td>
                    <td>
                      {pokemonUrl !== ""
                        ? pokemonUrl.types.map((type) => (
                            <span
                              key={type.type.name}
                              className="p-2 px-3 text-white rounded-md mr-3 pokemon-type"
                            >
                              {type.type.name}
                            </span>
                          ))
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Abilities </td>
                    <td>
                      {pokemonUrl !== ""
                        ? pokemonUrl.abilities.map((ability) => (
                            <p key={ability.ability.name} className="ml-2">
                              {`${ability.ability.name
                                .charAt(0)
                                .toUpperCase()}${ability.ability.name.slice(
                                1
                              )}`}
                            </p>
                          ))
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonView
