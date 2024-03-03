export interface InputsTimerProps {
    handleInputPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setMinutes: (minutes: string) => void;
    setHours: (hours: string) => void;
    setSeconds: (seconds: string) => void;
    minutes: string;
    seconds: string;
    hours: string;
  }

  export interface PanelTimerProps {
    children: React.ReactNode;
    setMinutes: (minutes: string) => void;
    setSeconds: (seconds: string) => void;
    minutes: string;
    seconds: string;
    stopTime: () => void;
    startTime: () => void;
    resetTime: () => void;
  }

  export interface ProgressBarTimerProps {
    runTime: boolean;
    countdown: number;
    time: number;
    colorIndicator: boolean;
  }