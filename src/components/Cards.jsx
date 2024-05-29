import Card from "react-bootstrap/Card";

// eslint-disable-next-line react/prop-types
const Cards = ( {tittle, body} ) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
