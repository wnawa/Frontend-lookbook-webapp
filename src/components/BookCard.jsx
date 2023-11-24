import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";

import ncmd from "../assets/images/nc-md.gif";

const BookCard = ({ Book }) => {
  const src = `https://covers.openlibrary.org/b/id/${
    Book.cover_id || Book.cover_i
  }-M.jpg`;

  return (
    <div className="text-center col-12 col-lg-3 mx-auto">
      <Card
        className="  ml-5 ms-1 m-2 text-wrap shadow"
        style={{ width: "15rem" }}
      >
        <Card.Body className="text-start">
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
              {Book.first_publish_year !== "" ? Book.first_publish_year : "NA"}
            </div>

            <img alt="Book Cover" src={Book.cover_i !== "" ? src : ncmd} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
