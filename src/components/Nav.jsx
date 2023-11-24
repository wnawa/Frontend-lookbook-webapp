import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Nav = ({ onSearch }) => {
  const handleSelect = (e) => {
    onSearch(e);
  };
  return (
    <ButtonGroup className="btn-group  " aria-label="search group">
      <DropdownButton
        className="p-1 btn btn-group-sm"
        title="Subjects"
        id="dropdown-menu-subjects"
        onSelect={(e) => handleSelect(e)}
      >
        {[
          "Adventure",
          "Arts",
          "Animals",
          "Biography",
          "Business",
          "Classics",
          "Crime",
          "Cooking",
          "Drama",
          "Family",
          "Fiction",
          "Fantasy",
          "Giography",
          "History",
          "Kids",
          "Mystery",

          "Politics",

          "Religion",
          "Science",

          "Thriller",
          "Women",
        ].map((subject) => {
          return (
            <Dropdown.Item eventKey={subject} href="#">
              {subject}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <DropdownButton
        className="p-1 btn btn-group-sm"
        title="Language"
        id="dropdown-menu-Language"
        onSelect={handleSelect}
      >
        {["English", "Arabic", "German", "Spanish", "Hindi", "Italian"].map(
          (Lang) => {
            return (
              <Dropdown.Item eventKey={Lang} href="#">
                {Lang}
              </Dropdown.Item>
            );
          }
        )}
      </DropdownButton>

      <DropdownButton
        className="p-1 btn btn-group-sm"
        title="Age"
        id="dropdown-menu-Age"
        onSelect={handleSelect}
      >
        {["Adults", "Teenagers", "kids"].map((Age) => {
          return (
            <Dropdown.Item eventKey={Age} href="#">
              {Age}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>

      {/* <DropdownButton
            className="p-1"
            title="Formate"
            id="dropdown-menu-Formate"
            onSelect={handleSelect}
          >
            {["E-Book", "Text"].map((Formate) => {
              return (
                <Dropdown.Item eventKey={Formate} href="#">
                  {Formate}
                </Dropdown.Item>
              );
            })}
          </DropdownButton> */}
    </ButtonGroup>
  );
};

export default Nav;
