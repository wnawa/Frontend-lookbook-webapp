import React from "react";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FetchService } from "../Services/FetchService";
import cbLogo from "../assets/images/icons8-search-24.png";

const Search = ({ setData }) => {
  const [SearchText, setSearchText] = useState("");

  return (
    <ButtonGroup className="btn-group " aria-label="search group">
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
        role="searchbox"
        value={SearchText}
        placeholder="Author,Title"
        onChange={(e) => setSearchText(e.target.value)}
        className=""
      ></input>
      <Button
       role="searchbutton"
        className="btn btn-white "
        onClick={() => FetchService.bytitle(SearchText, setData)}
      >
        <img src={cbLogo} alt="search" className="img-flex" />
      </Button>
    </ButtonGroup>
  );
};

export default Search;
