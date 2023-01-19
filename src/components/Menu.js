import Button from "./Button"

const Menu = ({ previousPage, nextPage, currentPage }) => {
  return (
    <div className="flex flex-col items-center pt-3 ">
      <div>
        <Button onClick={previousPage} buttonText={"Previous page"}></Button>
        <Button onClick={nextPage} buttonText={"Next page"}></Button>
      </div>
      <p className="font-semibold mt-1">Page {currentPage}</p>
    </div>
  )
}

export default Menu
