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

  const src = `https://covers.openlibrary.org/b/id/${
    Book.cover_id || Book.cover_i
  }-M.jpg`;

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
                      return <li>{author.name || author}</li>;
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
              {Book.first_publish_year != "" ? Book.first_publish_year : "NA"}
            </div>

            <img src={Book.cover_i != "" ? src : ncmd} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
