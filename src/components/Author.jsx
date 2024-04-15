import react from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Card from "react-bootstrap/Card";
const Author = ({ Author }) => {
  const key = Author.key;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{Author.name}</Card.Title>
        <Card.Text>
          <div className="d-block">
            {" "}
            <span className="fw-bold">Top Sujects:</span>
            <ul>
              {Author.top_subjects.map((subject) => {
                return <li>{subject} </li>;
              })}
            </ul>{" "}
          </div>
          <div className="d-block">
            {" "}
            <span className="fw-bold">Birth Date:</span> {Author.birth_date}
          </div>
          <div className="d-block">
            {" "}
            <span className="fw-bold">ISBN:</span> {Author.top_work}
          </div>
          <img src={src} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Author;
