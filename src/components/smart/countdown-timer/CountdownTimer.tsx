import React from "react";

import { Indicator } from "../../dump/indicator/Indicator";
import { InputsTimer } from "./InputsTimer";
import { PanelTimer } from "./PanelTimer";
import { ProgressBarTimer } from "./ProgressBarTimer";

import styles from "./CountdownTimer.module.scss";

export const CountdownTimer: React.FC = () => {
  const [runTime, setRunTime] = React.useState<boolean>(false);
  const [colorIndicator, setColorIndicator] = React.useState<boolean>(false);
  const [showElement, setShowElement] = React.useState<boolean>(false);

  const [minutes, setMinutes] = React.useState<string>("");
  const [seconds, setSeconds] = React.useState<string>("");
  const [hours, setHours] = React.useState<string>("");

  let time = Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600;
  const [countdown, setCountdown] = React.useState<number>(time);

  const timerId = React.useRef<any>();

  React.useEffect(() => {
    if (runTime && time !== 0) {
      timerId.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId.current);
  }, [runTime]);

  React.useEffect(() => {
    if (countdown === 0 && runTime) {
      clearInterval(timerId.current);
      time = 0;
      setRunTime((prev) => (prev = false));
      setMinutes((prev) => (prev = ""));
      setHours((prev) => (prev = ""));
      setSeconds((prev) => (prev = ""));
      setShowElement((prev) => (prev = true));
    }
    if (countdown <= 10 && time) {
      setColorIndicator(true);
    } else {
      setColorIndicator(false);
    }
  }, [countdown, minutes]);

  React.useEffect(() => {
    setCountdown(time);
  }, [minutes, seconds, hours]);

  const startTime = () => {
    if (minutes !== "" || seconds !== "" || hours !== "") setRunTime(true);
  };

  const stopTime = () => {
    clearInterval(timerId.current);
    setRunTime(false);
  };

  const resetTime = () => {
    setMinutes((prev) => (prev = ""));
    setSeconds((prev) => (prev = ""));
    setHours((prev) => (prev = ""));
    setRunTime((prev) => (prev = false));
  };

  const handleInputPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      startTime();
    }
  };

  return (
    <div className={styles.timerComponent}>
      {showElement && (
        <Indicator setShowElement={setShowElement}>Done!</Indicator>
      )}
     

      <InputsTimer
        handleInputPress={handleInputPress}
        setMinutes={setMinutes}
        setHours={setHours}
        setSeconds={setSeconds}
        hours={hours}
        seconds={seconds}
        minutes={minutes}
      />

      <PanelTimer
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
     
        
        startTime={startTime}
        stopTime={stopTime}
        resetTime={resetTime}
      >
        <ProgressBarTimer
          time={time}
          runTime={runTime}
          countdown={countdown}
          colorIndicator={colorIndicator}
        />
      </PanelTimer>
    </div>
  );
};
