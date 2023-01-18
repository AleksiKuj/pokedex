import Pokemon from "./Pokemon"

const PokemonList = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  )
}
export default PokemonList
