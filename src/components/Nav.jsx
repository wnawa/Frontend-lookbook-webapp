import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Nav = ({ onSearch }) => {
  const handleSelect = (e) => {
    
    onSearch(e);
   
  };
  return (
    <Row>
      <Col className="mx-auto text-center p-2 border-1 " xs={12} lg={12}>
        <ButtonGroup className="btn-group" aria-label="Basic example">
          <DropdownButton
            className="p-1 "
            title="Subjects"
            id="dropdown-menu-subjects"
            onSelect={(e) => handleSelect(e)}
          >
            {[
              "Arts",
              "Animals",
              "Biography",
              "Family",
              "Fiction",
              "Politics",
              "Kids",
              "Giography",
              "History",
              "Science",
              "Religion",
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
            className="p-1"
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
            className="p-1"
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
      </Col>
    </Row>
  );
};

export default Nav;
