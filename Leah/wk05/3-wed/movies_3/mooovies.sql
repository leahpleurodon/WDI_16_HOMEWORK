
CREATE TABLE movie_actors (
    id SERIAL4 PRIMARY KEY,
    movie_id INTEGER,
    actor_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
);
CREATE TABLE movies (
    id SERIAL4 PRIMARY KEY,
    imdbID  varchar(30) NOT NULL UNIQUE,
    title VARCHAR(100) NOT NULL,
    year VARCHAR(20),
    rating VARCHAR(20),
    released VARCHAR(20),
    runtime VARCHAR(20),
    director VARCHAR(50),
    plot TEXT,
    poster VARCHAR(200),
    country VARCHAR (100),
);