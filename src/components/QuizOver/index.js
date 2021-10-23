import React, { useEffect, useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import Modal from "../Modal";
const QuizOver = React.forwardRef(
  (
    { levelNames, score, maxQuestions, quizLevel, percent, loadLevelQuestions },
    ref
  ) => {
    const [asked, setAsked] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
      setAsked(ref.current);
    }, [ref]);
    const averageGrade = maxQuestions / 2;

    if (score < averageGrade) {
      setTimeout(() => {
        loadLevelQuestions(quizLevel);
      }, 3000);
    }

    const showModal = (id) => {
      setOpenModal(true);
    };
    const closeModal = (id) => {
      setOpenModal(false);
    };

    const decision =
      score >= averageGrade ? (
        <>
          <div className="stepsBtnContainer">
            {quizLevel < levelNames.length ? (
              <>
                <p className="successMsg"> Bravo, passez au niveau suivant</p>
                <button
                  className="btnResult success"
                  onClick={() => loadLevelQuestions(quizLevel)}
                >
                  Niveau suivant
                </button>
              </>
            ) : (
              <>
                <p className="successMsg">
                  <GiTrophyCup size="50" />
                  Bravo, vous êtes un expert!
                </p>
                <button
                  className="btnResult gameOver"
                  onClick={() => loadLevelQuestions(0)}
                >
                  Accueil
                </button>
              </>
            )}
          </div>
          <div className="percentage">
            <div className="progressPercent">Réussite: {percent}%</div>
            <div className="progressPercent">
              Note: {score}/{maxQuestions}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="stepsBtnContainer">
            <p className="successMsg"> Vous avez échoué !</p>
          </div>

          <div className="percentage">
            <div className="progressPercent">Réussite: {percent}%</div>
            <div className="progressPercent">
              Note: {score}/{maxQuestions}
            </div>
          </div>
        </>
      );

    const questionAnswer =
      score >= averageGrade ? (
        asked.map((question) => {
          return (
            <tr key={question.id}>
              <td>{question.question}</td>
              <td>{question.answer}</td>
              <td>
                <button
                  className="btnInfo"
                  onClick={() => showModal(question.heroId)}
                >
                  Infos
                </button>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="3">
            <div className="loader"></div>
            <p style={{ textAlign: "center", color: "red" }}>
              Pas de réponses!
            </p>
          </td>
        </tr>
      );

    return (
      <>
        {decision}

        <hr />
        <p>Les réponses aux questions posées</p>
        <div className="answerContainer">
          <table className="answers">
            <thead>
              <tr>
                <th>Questions</th>
                <th>Réponses</th>
                <th>Infos</th>
              </tr>
            </thead>
            <tbody>{questionAnswer}</tbody>
          </table>
        </div>

        <Modal showModal={openModal} closeModal={closeModal}>
          <div className="modalHeader">
            <h2>Titre</h2>
          </div>
          <div className="modalBody">
            <h3>Titre 2</h3>
          </div>
          <div className="modalFooter">
            <button className="modalBtn">Fermer</button>
          </div>
        </Modal>
      </>
    );
  }
);

export default React.memo(QuizOver);
