const Filter = ({ value, handleChange }) => {
  return (
    <div className="flex justify-center">
      <span className="mx-1">Search: </span>
      <input
        value={value}
        onChange={handleChange}
        className="bg-gray-100 rounded-md"
      />
    </div>
  )
}
export default Filter
