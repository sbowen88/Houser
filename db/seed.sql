-- CREATE TABLE
create table users
    (id serial primary key,
        username varchar(50),
            password varchar(20) )

-- CREATE USER
INSERT INTO users
    (username, password)
        VALUES
            ($1, $2)
                RETURNING *;

-- FIND SESSION USER
SELECT * 
    FROM users
        WHERE id = $1;

-- CREATE PROPERTIES TABLE
CREATE TABLE IF NOT EXISTS properties(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    propertyName VARCHAR(20),
    propertyDescription VARCHAR(200),
    address VARCHAR(30),
    city VARCHAR(20),
    State VARCHAR(20),
    zip INTEGER,
    imageUrl TEXT,
    loanAmount VARCHAR(20),
    monthlyMortgage VARCHAR(20),
    desiredRent VARCHAR(20)
);

-- ADD PROPERTY INTO TABLE