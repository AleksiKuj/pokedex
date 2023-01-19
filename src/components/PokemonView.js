import { useMatch, Link } from "react-router-dom"
import Button from "./Button"

const PokemonView = ({ pokemons }) => {
  const match = useMatch("/pokemons/:name")
  const pokemon = match
    ? pokemons.find((pokemon) => pokemon.name === match.params.name)
    : null

  if (!pokemon) {
    return null
  }

  return (
    <div>
      <div className="flex flex-col items-center pt-3">
        <Link to={"/"}>
          <Button buttonText="Back"></Button>
        </Link>
        <p className="text-2xl font-semibold py-2">{`${pokemon.name
          .charAt(0)
          .toUpperCase()}${pokemon.name.slice(1)}`}</p>
      </div>
    </div>
  )
}

export default PokemonView
