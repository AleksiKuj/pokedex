import Menu from "./Menu"
import Pokemon from "./Pokemon"

const PokemonList = ({
  pokemons,
  previousPage,
  currentPage,
  nextPage,
  perPage,
  setPerPage,
}) => {
  return (
    <div>
      <Menu
        previousPage={previousPage}
        currentPage={currentPage}
        nextPage={nextPage}
        perPage={perPage}
        setPerPage={setPerPage}
        dropdownVisible="true"
      />

      <div className="flex flex-wrap justify-center items-center">
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
      <Menu
        previousPage={previousPage}
        currentPage={currentPage}
        nextPage={nextPage}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </div>
  )
}
export default PokemonList
