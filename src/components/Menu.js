import Button from "./Button"
//import DropdownMenu from "./DropdownMenu"

const Menu = ({
  previousPage,
  nextPage,
  currentPage,
  // perPage,
  // setPerPage,
  // dropdownVisible,
}) => {
  return (
    <div className="flex flex-col items-center py-3 ">
      <div>
        <Button onClick={previousPage} buttonText={"Previous page"}></Button>
        <Button onClick={nextPage} buttonText={"Next page"}></Button>
      </div>
      {/* <DropdownMenu
        perPage={perPage}
        setPerPage={setPerPage}
        dropdownVisible={dropdownVisible}
      /> */}
      <p className="font-semibold mt-1">Page {currentPage}</p>
    </div>
  )
}

export default Menu
