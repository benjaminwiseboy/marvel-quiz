import React, { useEffect, useState } from "react";
import Stepper from "react-stepper-horizontal";

const Levels = ({ levelNames, quizLevel }) => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const quizSteps = levelNames.map((level) => ({
      title: level.toUpperCase(),
    }));
    setLevels(quizSteps);
  }, [levelNames]);

  return (
    <div className="levelsContainer" style={{ background: "transparent" }}>
      <Stepper
        steps={levels}
        activeStep={quizLevel}
        circleTop={0}
        activeTitleColor={"#d31017"}
        activeColor={"#d31017"}
        completeColor={"#E0E0E0"}
        defaultTitleColor={"#E0E0E0"}
        compleBarColor={"#E0E0E0"}
        barStyle={"dashed"}
        size={45}
        circleFontSize={18}
      />
    </div>
  );
};

export default React.memo(Levels);
