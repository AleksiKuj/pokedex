import { useState, useEffect } from "react"

const Pokemon = ({ pokemon }) => {
  return <div className="p-6">{pokemon.name}</div>
}
export default Pokemon
