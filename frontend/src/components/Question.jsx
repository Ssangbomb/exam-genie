import React from "react";
import { FcApproval, FcHighPriority } from "react-icons/fc";
import "../styles/ExamGenerated.scss";

const Question = (props) => {
  console.log("these are key", props.id);
  return (
    props.id === props.currentQuestion && (
      <div className="question-card">
        {props.correct && (
          <h3 className="correct">
            <FcApproval />
            Correct
          </h3>
        )}
        {props.incorrect && (
          <h3 className="incorrect">
            <FcHighPriority /> Incorrect
          </h3>
        )}
        <h1>Question {props.currentQuestion + 1}</h1>
        <h2>{props.question} </h2>
        <ul className="answers-list">
          {props.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={props.selectedOption === option}
                  onChange={props.handleOptionChange}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        {props.selectedOption && (
          <div>
            <div className="AnswerFeedback">
              <p>Answer: {props.answer}</p>
              <p>{props.feedback}</p>
            </div>
            <div className="buttonNextQ">
              <button
                className="button-pushable"
                onClick={props.handleNextQuestion}
              >
                <span class="button-shadow"></span>
                <span class="button-edge"></span>
                <span class="button-front text">Next Questions</span>
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};
export default Question;
