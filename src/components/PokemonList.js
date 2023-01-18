const PokemonList = ({ pokemons }) => {
  const style = { color: "red" }
  return (
    <div style={style}>
      {pokemons.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </div>
  )
}
export default PokemonList
