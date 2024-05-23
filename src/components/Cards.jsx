import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// eslint-disable-next-line react/prop-types
const Cards = ( {tittle, body, variant, textbutton} ) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant={variant}>{textbutton}</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
