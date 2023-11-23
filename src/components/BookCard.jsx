import react from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ncmd from "../assets/images/nc-md.gif";
import Author from "./Author";

const BookCard = ({ Book }) => {
  const [open, setOpen] = useState(false);

  // if(Book.cover_i=="" )
  // let  src = "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";
  const src = `https://covers.openlibrary.org/b/id/${
    Book.cover_id 
    || Book.cover_i
  }-M.jpg`;
  //const authorlink= `https://openlibrary.org&{authors.key}}`
  return (
    <div className="col-12 col-lg-4 mx-auto">
      <Card
        className=" text-start ml-5 ms-1 m-2 text-wrap shadow"
        style={{ width: "15rem" }}
      >
        <Card.Body>
          <Card.Title className="fw-bold text-wrap">{Book.title}</Card.Title>
          <Card.Text>
            <div className="d-block">
              <span className="fw-bold">Author/s:</span>
              <ul>
                {Book.authors?.length > 0
                  ? Book.authors.map((author) => {
                      return (
                        <li>
                          {/* <Link to={"https://openlibrary.org" + author.key}> */}
                          {author.name || author}
                          {/* </Link> */}
                        </li>
                      );
                    })
                  : Book.author_name?.length > 0
                  ? Book.author_name.map((author) => {
                      return <li>{author}</li>;
                    })
                  : "NA"}
              </ul>
            </div>
            <div className="d-block">
              <span className="fw-bold">Publish Year:</span>
              {Book.first_publish_year != "" && Book.first_publish_year}
            </div>
            {/* <div className="d-block">  <span className="fw-bold">ISBN:</span> {{availability:isbn}}</div>  */}
            <img src={Book.cover_i && src || ncmd} />
            {/* {open && <Author />} */}
          </Card.Text>
          {/* <Button variant="primary">Buy</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
