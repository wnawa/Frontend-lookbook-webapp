import React from "react";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FetchService } from "../Services/FetchService";
import cbLogo from "../assets/images/icons8-search-24.png";
//"https://openlibrary.org/search.json?q=the+lord+of+the+rings";
const Search = ({setData }) => {
  const [SearchText, setSearchText] = useState('');
 
  return (
    <Row className=" p-2 border-1 ">
      <Col className="align-content-between justify-content-center">
        <ButtonGroup
          className="btn-group align-content-between"
          aria-label="Basic example"
        >
          {/* <Form>
            {["Author", "BookTitle"].map((type) => (
              <Form.Check
                inline
                type="radio"
                id={`radio-${type}`}
                name="group1"
                label={type}
                onClick={()=> onSearchType(type)}
              />
            ))}
          </Form> */}
          <input
            type="text"
            value={SearchText}
            placeholder="Author,Title"
            onChange={(e)=>  setSearchText(e.target.value)}
            className=""
          ></input>
          <Button
            className="btn btn-white "
            onClick={() => FetchService.bytitle(SearchText,setData)}
          >
            <img src={cbLogo} alt="search" />
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default Search;
