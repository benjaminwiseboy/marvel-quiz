import React from "react";

const ProgressBar = ({ idQuestion, maxQuestions }) => {
  const currentQuestion = idQuestion + 1;
  const getWidth = (totalQuestions, questionId) => {
    return (100 / totalQuestions) * questionId;
  };

  const progressPercent = getWidth(maxQuestions, currentQuestion);
  return (
    <>
      <div className="precentage">
        <div className="progressPercent">{`Question : ${
          idQuestion + 1
        }/${maxQuestions}`}</div>
        <div className="progressPercent">{`Pourcentage : ${progressPercent}%`}</div>
      </div>
      <div className="progressBar">
        <div
          className="progressBarChange"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </>
  );
};

export default React.memo(ProgressBar);
