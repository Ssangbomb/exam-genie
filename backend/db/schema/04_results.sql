-- DROP TABLE IF EXISTS results CASCADE;
-- CREATE TABLE results (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
--   answer VARCHAR(255) NOT NULL,
--   feedback VARCHAR(255),
--   score SMALLINT NOT NULL
-- );
