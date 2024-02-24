import React from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";

import { formatTime } from "../../../helpers/formatTime";

import ClockIcon from "../../../assets/images/clock.gif";

import styles from "./CountdownTimer.module.scss";

interface ProgressBarTimerProps {
  runTime: boolean;
  countdown: number;
  time: number;
  colorIndicator: boolean;
}

export const ProgressBarTimer: React.FC<ProgressBarTimerProps> = ({
  runTime,
  countdown,
  time,
  colorIndicator
}) => {
    const color = colorIndicator ? "red" : "black";
  return (
    <div className={styles.timerComponent__progressbar}>
      {runTime && <img src={ClockIcon} alt="" />}
      <Flat
        progress={Math.floor(((time - countdown) / time) * 100)}
        text={formatTime(countdown)}
        showValue={false}
        sx={{
          strokeColor: color,
          barWidth: 4,
          textColor: color,
        }}
      />
    </div>
  );
};
