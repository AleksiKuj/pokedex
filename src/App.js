import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "./components/PokemonList"
import PokemonView from "./components/PokemonView"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Search from "./components/Search"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [perPage, setPerPage] = useState(20)
  const [filter, setFilter] = useState("")
  const [value, setValue] = useState("")
  const baseUrl = "https://pokeapi.co/api/v2"

  useEffect(() => {
    const resetPerPage = () => {
      if (filter.length > 0) {
        setPerPage(1200)
      }
      if (filter.length === 0) {
        setPerPage(20)
      }
    }
    const getPokemon = async () => {
      const offset = (currentPage - 1) * perPage
      const response = await axios.get(
        `${baseUrl}/pokemon?limit=${perPage}&offset=${offset}`
      )
      setPokemons(response.data.results)
      setTotalPages(Math.ceil(response.data.count / perPage))
    }

    getPokemon()
    resetPerPage()
  }, [currentPage, perPage, filter, value])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

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
  const handleClick = (func) => {
    func()
    setTimeout(() => {
      scrollToTop()
    }, 75)
  }
  return (
    <div>
      <Router>
        <div className="flex flex-col min-h-screen items-center">
          <Header />
          <div className="flex-grow  w-full items-center justify-center">
            <Routes>
              <Route
                path="/"
                element={
                  <PokemonList
                    pokemons={pokemons}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    previousPage={() => handleClick(previousPage)}
                    nextPage={() => handleClick(nextPage)}
                    perPage={perPage}
                    setPerPage={setPerPage}
                    filter={filter}
                    setFilter={setFilter}
                    value={value}
                    setValue={setValue}
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
