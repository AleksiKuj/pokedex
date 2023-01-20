import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "./components/PokemonList"
import PokemonView from "./components/PokemonView"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [perPage, setPerPage] = useState(20)
  const baseUrl = "https://pokeapi.co/api/v2"

  useEffect(() => {
    const getPokemon = async () => {
      const offset = (currentPage - 1) * perPage
      const response = await axios.get(
        `${baseUrl}/pokemon?limit=${perPage}&offset=${offset}`
      )
      setPokemons(response.data.results)
      // console.log(response.data)
      // console.log(response.data.count)
      setTotalPages(Math.ceil(response.data.count / perPage))
    }

    getPokemon()
  }, [currentPage, perPage])

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
      <Router>
        <div className="flex flex-col min-h-screen items-center">
          <Header />
          <div className="flex-grow  w-4/5 items-center justify-center">
            <Routes>
              <Route
                path="/"
                element={
                  <PokemonList
                    pokemons={pokemons}
                    currentPage={currentPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    perPage={perPage}
                    setPerPage={setPerPage}
                  />
                }
              />
              <Route
                path="/pokemons/:name"
                element={<PokemonView pokemons={pokemons} />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
