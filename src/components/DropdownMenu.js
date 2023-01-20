const DropdownMenu = ({ perPage, setPerPage, dropdownVisible }) => {
  const handleChange = (event) => {
    setPerPage(event.target.value)
  }

  if (dropdownVisible) {
    return (
      <div>
        <span>Pokémon per page</span>
        <select
          value={perPage}
          onChange={handleChange}
          className="bg-transparent hover:bg-red-500 hover:text-white border-2 border-red-500 text-red-700 rounded-md mt-2 py-1 bg-transparent mx-2"
        >
          <option value="10" className="bg-white text-red-700">
            10
          </option>
          <option value="20" className="bg-white text-red-700">
            20
          </option>
          <option value="50" className="bg-white text-red-700">
            50
          </option>
          <option value="75" className="bg-white text-red-700">
            75
          </option>
        </select>
      </div>
    )
  }
}
export default DropdownMenu
