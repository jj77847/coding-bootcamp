import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Alert from "react-bootstrap/Alert";

export const MovieCard = ({ movie }) => {
  return (
    <>
      {movie ? (
        <Card style={{ maxWidth: "24rem" }}>
          <Card.Img variant="top" src={movie.imageUrl} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.plot}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Director: {movie.director}</ListGroupItem>
            <ListGroupItem>Genre: {movie.genre}</ListGroupItem>
            <ListGroupItem>Released: {movie.released}</ListGroupItem>
          </ListGroup>
        </Card>
      ) : (
        <Alert variant="warning">
          No movies found, please make a search again
        </Alert>
      )}
    </>
  );
};
