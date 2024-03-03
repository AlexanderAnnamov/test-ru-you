import React from "react";

import { TextInput } from "../../ui/text-input/TextInput";

import type { InputsTimerProps } from "../../../types/timerTypes";

import styles from "./CountdownTimer.module.scss";

export const InputsTimer: React.FC<InputsTimerProps> = ({
  handleInputPress,
  setMinutes,
  setSeconds,
  setHours,
  minutes,
  seconds,
  hours,
}) => {
  return (
    <div className={styles.timerComponent__inputs}>
      <TextInput
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        onKeyPress={handleInputPress}
      />

      <TextInput
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        onKeyPress={handleInputPress}
      />

      <TextInput
        type="number"
        placeholder="Seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        onKeyPress={handleInputPress}
      />
    </div>
  );
};
