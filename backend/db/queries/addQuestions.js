const db = require('../connection');

const addQuestions = (questionObject, examId) => {
  const query = `INSERT INTO questions (user_id, exam_id, question, question_option, answer, feedback) VALUES ($1, $2, $3, $4, $5, $6);`;
  const { question, options, answer, feedback } = questionObject;
  const user_id = 1;

  return db.query(query, [user_id, examId, question, options, answer, feedback])
    .then(data => {
      console.log('Question saved to the database from addQuestions.');
    })
    .catch((err) => {
      console.log('Error saving question to the database:', err.message);
    });
}

module.exports = { addQuestions };
