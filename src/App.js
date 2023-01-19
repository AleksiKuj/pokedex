import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "./components/PokemonList"
import Menu from "./components/Menu"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const perPage = 20
  const baseUrl = "https://pokeapi.co/api/v2"

  useEffect(() => {
    const getPokemon = async () => {
      const offset = (currentPage - 1) * perPage
      const response = await axios.get(
        `${baseUrl}/pokemon?limit=${perPage}&offset=${offset}`
      )
      setPokemons(response.data.results)
      console.log(response.data)
      console.log(response.data.count)
      setTotalPages(Math.ceil(response.data.count / perPage))
    }

    getPokemon()
  }, [currentPage])

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      console.log(currentPage)
    }
  }
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      console.log(currentPage)
    }
  }
  return (
    <div>
      <Menu
        previousPage={previousPage}
        currentPage={currentPage}
        nextPage={nextPage}
      />
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
