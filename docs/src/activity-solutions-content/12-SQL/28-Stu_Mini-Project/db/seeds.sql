INSERT INTO movies (movie_name)
VALUES
("Movie 1"),
("Movie 2"),
("Movie 3");

INSERT INTO reviews (movie_id, review)
VALUES
(1, "Review for movie 1"),
(2, "Review for movie 2"),
(1, "Review for movie 1"),
(2, "Review for movie 2"),
(3, "Review for movie 3"),
(1, "Review for movie 1"),
(3, "Review for movie 3");

SELECT * FROM movies;
SELECT * FROM reviews;
