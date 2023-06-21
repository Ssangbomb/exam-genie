DROP TABLE IF EXISTS exams CASCADE;
CREATE TABLE exams (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- topic_id INTEGER REFERENCES topics(id) ON DELETE CASCADE,
  name VARCHAR(255),
  date date NOT NULL
);
