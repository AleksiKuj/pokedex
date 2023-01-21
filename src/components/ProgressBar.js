const ProgressBar = ({ value, text }) => {
  const fillerStyle = {
    width: `${value}%`,
    borderRadius: "inherit",
  }

  return (
    <div className="mb-6 my-3 mx-10 w-60 h-5">
      <p className=" pokemon-stat-type ">
        {/* {`${text.charAt(0).toUpperCase()}${text.slice(1)}`} */}
        {text.toUpperCase()}
      </p>
      <div className="bg-gray-300 rounded-lg text-right  ">
        <div style={fillerStyle} className="stat-fill">
          <p className="text-white font-bold mr-3">{`${value}`}</p>
        </div>
      </div>
    </div>
  )
}
export default ProgressBar
