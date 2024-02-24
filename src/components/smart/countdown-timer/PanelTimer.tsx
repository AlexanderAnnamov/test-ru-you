import React from "react";

import { Button } from "../../ui/button/Button";

import styles from "./CountdownTimer.module.scss";

interface PanelTimerProps {
  children: React.ReactNode;
  setMinutes: (minutes: string) => void;
  setSeconds: (seconds: string) => void;
 
  minutes: string;
  seconds: string;

  stopTime: () => void;
  startTime: () => void;
  resetTime: () => void;
}

export const PanelTimer: React.FC<PanelTimerProps> = ({
  children,
  setMinutes,
  setSeconds,
 
  minutes,
  seconds,

  startTime,
  stopTime,
  resetTime,
}) => {
  return (
    <div className={styles.timerComponent__panel}>
      <div className={styles.timerComponent__btnpanel}>
        <Button
          className={styles.button + " " + styles.primary}
          onClick={() => setSeconds(String(Number(seconds) + 30))}
        >
          +30 sec
        </Button>
        <Button
          className={styles.button + " " + styles.primaryLight}
          onClick={() => setMinutes(String(Number(minutes) + 1))}
        >
          +1 min
        </Button>
        <Button
          className={styles.button + " " + styles.primaryGreat}
          onClick={() => setMinutes(String(Number(minutes) + 5))}
        >
          +5 min
        </Button>
      </div>
      {children}
      <div className={styles.timerComponent__btnpanel}>
        <Button className={styles.button} onClick={stopTime}>
          Stop
        </Button>
        <Button
          className={styles.button + " " + styles.greatGreen}
          onClick={startTime}
        >
          Start
        </Button>
        <Button
          className={styles.button + " " + styles.excellentBlack}
          onClick={resetTime}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
