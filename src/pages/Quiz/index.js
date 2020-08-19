import React, { useCallback, useState, useEffect } from "react";
import api from "../../redux/api";

import { Loader } from "../../components/Loader";

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  List,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";
// import { connect } from "react-redux";

const Card = ({ text = "" }) => (
  <div className="container">
    <div className="card my-4 border-dark rouded">
      <div className="card-body">
        <div className="card-title text-center">
          <h4 className="entry-title">{text}</h4>
        </div>
      </div>
    </div>
  </div>
);

const Quiz = ({ match: { params } }) => {
  const [quiz, setQuiz] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const [userAnswered, setUserAnswered] = useState({});

  const getQuiz = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.quiz(params.courseId);

      if (!data.access) throw new Error(data.message || "");

      setLoading(false);
      setQuiz(data.quiz);
      // console.log(data);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, [params, api]);

  const checkQuiz = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.checkQuiz(quiz.id, userAnswered);
      console.log(data);
      if (data.success) {
        setResults(data.message || "Test passed");
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, [api, quiz, userAnswered]);

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  if (error) return <Card text={error} />;

  if (results)
    return (
      <>
        <Card text={results} />
        <div className="text-center">
          <Link
            to={`/quiz/results/${quiz.id}`}
            className="btn btn-maincolor text-white"
          >
            View
          </Link>
        </div>
      </>
    );

  if (loading || !quiz)
    return (
      <div className="my-4">
        <Loader />
      </div>
    );

  const handleCheck = (questionId, answerId) => {
    setUserAnswered({ ...userAnswered, [questionId]: answerId });
  };

  const renderAnswers = (answers, questionId) =>
    answers.map(({ id, answer }, index) => (
      <ListItem key={index} dense>
        <ListItemIcon>
          <Checkbox
            color="primary"
            edge="start"
            checked={Object.values(userAnswered).includes(id)}
            onChange={() => handleCheck(questionId, id)}
            tabIndex={-1}
          />
        </ListItemIcon>
        <ListItemText primary={answer} />
      </ListItem>
    ));

  const questions = quiz.questions.map(({ id, question, answers }, index) => (
    <div key={index}>
      <ListItem>
        <ListItemText primary={`${index + 1}. ${question} `} />
      </ListItem>
      {renderAnswers(answers, id)}
    </div>
  ));

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header text-center">Quiz</div>
        <div className="card-body">
          <List>{questions}</List>
        </div>
        <div className="card-footer">
          <Button
            variant="contained"
            size="large"
            id="buttonColor"
            onClick={checkQuiz}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
