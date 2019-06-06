CREATE DATABASE academy;

\c academy;

CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO categories (name) VALUES ( 'travel' );
INSERT INTO categories (name) VALUES ( 'lifestyle' );
INSERT INTO categories (name) VALUES ( 'business' );
INSERT INTO categories (name) VALUES ( 'food' );
INSERT INTO categories (name) VALUES ( 'work' );

CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    title VARCHAR(50) NOT NULL,
    short_description VARCHAR(50),
    description VARCHAR(50),
    published_at TIMESTAMP DEFAULT now(),
    image VARCHAR(50),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO posts (title, category_id, short_description, description, image) VALUES ('The waves are high & beautiful', 1, 'lorem', 'lorem', 'https://source.unsplash.com/weekly?nature');

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    content VARCHAR(50),
    author VARCHAR(50),
    post_id INTEGER REFERENCES POSTS(id) ON DELETE CASCADE
);

INSERT INTO Comments (content, author) VALUES ('The lorem', "Jose", 1);
INSERT INTO Comments (content, author) VALUES ('The lorem2', "Jhon", 1);
