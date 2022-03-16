import axios from "axios";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MovieCard } from "./MovieCard";
import { SearchForm } from "./SearchForm";

export const OmdbContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState();

  useEffect(async () => {
    if (movieName) {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=trilogy&t=${movieName}&rating=pg`
      );

      setMovie({
        title: data.Title,
        plot: data.Plot,
        released: data.Released,
        imageUrl: data.Poster,
        genre: data.Genre,
        director: data.Director,
      });
    }
  }, [movieName]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    if (name === "searchInput") {
      setSearchTerm(value);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    setMovieName(searchTerm);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <MovieCard movie={movie} />
        </Col>
        <Col md={4}>
          <SearchForm
            value={searchTerm}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
