DROP TABLE IF EXISTS leaderboard ;

CREATE TABLE leaderboard (
    user TEXT PRIMARY KEY ,
    score INTEGER NOT NULL
);  

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id TEXT PRIMARY KEY,
    password TEXT NOT NULL,
    funds DECIMAL(10000,2) DEFAULT 0
);

SELECT * FROM leaderboard;