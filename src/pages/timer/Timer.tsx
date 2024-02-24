import React from "react";

import { CountdownTimer } from "../../components/smart/countdown-timer/CountdownTimer";

import styles from './Timer.module.scss'

export const Timer = () => {
  return (
    <div className={styles.timerPage} style={{padding: '20px 30px'}}>
      <CountdownTimer />
    </div>
  );
};
