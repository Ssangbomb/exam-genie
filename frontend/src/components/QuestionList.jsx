import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Question from "./Question";
import {
  createRoutesFromElements,
  useNavigate,
  createBrowserRouter,
  Link,
} from "react-router-dom";
import { Route } from "react-router";
import "../styles/QuestionList.scss";
import Dashboard from "../pages/dashboard";
import "../styles/ExamGenerated.scss"

const QuestionList = (props) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  // console.log("questionlist", props)
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [userInput, setUserInput] = useState([]);
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  // console.log("user input", userInput);

  // useEffect(() => {
  //   fetch("http://localhost:8080/dashboard")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       props.setUserQuestion(data);
  //     });
  // }, []);

  const questions = props.questions;
  //validation of answer and change set of message Correct or incorrect
  const handleOptionChange = (e) => {
    const userAnswer = e.target.value;
    setUserInput([...userInput, userAnswer]);
    setSelectedOption(userAnswer);
    // console.log("user answer", userAnswer);
    if (userAnswer === questions[props.currentQuestion].answer) {
      setCorrect(true);
      props.setFinalScore(props.finalScore + 1);
    } else {
      setIncorrect(true);
    }
  };

  // Move to the next question
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCorrect(false);
    setIncorrect(false);
    if (props.currentQuestion + 1 < questions.length) {
      props.setCurrentQuestion(props.currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  // finish exam an redirect to Daschboard
  const finishExam = () => {
    navigate("/dashboard");
    const finalScore = props.finalScore;
    const result = { finalScore, userInput };

    fetch("http://localhost:8080/result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    }).then(() => {
      console.log("user answer added");
    });
  };

  const data = {
    labels : ["correct", "incorrect"],
    datasets : [
      {
        label: "results", 
        data: [props.finalScore, questions.length - props.finalScore],
        // data: [3, 5],
        backgroundColor: ["#85C1E9", "#EC7063"],
        borderColor: "black"
      }
    ]
  };
  const options = {
    responsive : true,
    title : {
      display : true,
      text : "Pia chart"
    },
  }

  const mappedQuestion = questions.map((question, index) => {
    return (
      <Question
        key={index}
        id={index}
        question={question.question}
        options={question.options}
        answer={question.answer}
        feedback={question.feedback}
        currentQuestion={props.currentQuestion}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
        handleNextQuestion={handleNextQuestion}
        correct={correct}
        incorrect={incorrect}
      />
    );
  });

  return (
    <>
      {showResults ? (
        <div className="final-results">
          <h1>Fianl Results</h1>
          <div style={ {width: "50%"}}>
            <Pie
              data = {data}
              options={options}
            />
          </div>
          <h2>
            {props.finalScore} out of {questions.length} correct - (
            {(props.finalScore / questions.length) * 100}%)
          </h2>
          <button className="button-pushable" onClick={finishExam}>
            <span class="button-shadow"></span>
            <span class="button-edge"></span>
            <span class="button-front text">Finish Exam</span>
          </button>
        </div>
      ) : (
        <div className="question-list">{mappedQuestion}</div>
      )}
    </>
  );
};

export default QuestionList;
