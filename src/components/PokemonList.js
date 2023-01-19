import Menu from "./Menu"
import Pokemon from "./Pokemon"

const PokemonList = ({ pokemons, previousPage, currentPage, nextPage }) => {
  return (
    <div>
      <Menu
        previousPage={previousPage}
        currentPage={currentPage}
        nextPage={nextPage}
      />

      <div className="flex flex-wrap justify-center">
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
      <Menu
        previousPage={previousPage}
        currentPage={currentPage}
        nextPage={nextPage}
      />
    </div>
  )
}
export default PokemonList
