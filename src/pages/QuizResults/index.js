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

const QuizResults = ({ match: { params } }) => {
  const [results, setResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getResultsForQuiz = useCallback(async () => {
    try {
      const response = await api.getResultsForQuiz(params.quizId);

      setLoading(false);
      setResults(response.data);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }, [params, api]);

  useEffect(() => {
    getResultsForQuiz();
  }, [getResultsForQuiz]);

  if (error) return <Card text={error} />;

  if (loading || !results)
    return (
      <div className="my-4">
        <Loader />
      </div>
    );

  const renderAnswers = (answers) =>
    answers.map(({ answer, correct }, index) => (
      <ListItem key={index} dense>
        <ListItemIcon>
          <Checkbox
            disabled={true}
            color="secondary"
            edge="start"
            defaultChecked={correct}
          />
        </ListItemIcon>
        <ListItemText primary={answer} />
      </ListItem>
    ));

  const questions = results.questions.map(
    ({ id, question, answers }, index) => (
      <div key={index}>
        <ListItem>
          <ListItemText primary={`${index + 1}. ${question} `} />
        </ListItem>
        {renderAnswers(answers, id)}
      </div>
    )
  );

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header text-center">
          {results.message || "Quiz"}
        </div>
        <div className="card-body">
          <List>{questions}</List>
        </div>
        <div className="card-footer">
          {/* <Button
            variant="contained"
            size="large"
            id="buttonColor"
            onClick={checkQuiz}
          >
            Back
          </Button> */}
          <Link
            className="btn btn-maincolor text-white"
            to={`/quiz/${params.quizId}`}
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
