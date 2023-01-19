const Button = ({ onClick, buttonText }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-3 mx-2 border border-red-500 hover:border-transparent rounded"
    >
      {buttonText}
    </button>
  )
}

export default Button
