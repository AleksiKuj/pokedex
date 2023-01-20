import Menu from "./Menu"
import Pokemon from "./Pokemon"
import Filter from "./Filter"
import { useState } from "react"

const PokemonList = ({
  pokemons,
  previousPage,
  currentPage,
  nextPage,
  perPage,
  setPerPage,
  filter,
  setFilter,
  value,
  setValue,
}) => {
  const pokemonsToShow =
    filter.length === 0
      ? pokemons
      : pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter.toLowerCase())
        )

  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
    if (e.target.value.length > 1) {
      setFilter(e.target.value)
      console.log(filter)
    } else {
      setFilter("")
      setPerPage(20)
    }
  }
  return (
    <div>
      <div>
        <Menu
          previousPage={previousPage}
          currentPage={currentPage}
          nextPage={nextPage}
          perPage={perPage}
          setPerPage={setPerPage}
          dropdownVisible="true"
        />
        <div>
          <Filter value={value} handleChange={handleChange} />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {pokemonsToShow.map((pokemon) => (
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
    </div>
  )
}
export default PokemonList
