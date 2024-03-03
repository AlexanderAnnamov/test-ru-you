import React from "react";

import styles from "./Indicator.module.scss";

interface IndicatorProps {
  setShowElement: (elem: boolean) => void;
  children: React.ReactNode;
}

export const Indicator: React.FC<IndicatorProps> = ({
  setShowElement,
  children,
}) => {
  React.useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  return <div className={styles.indicator}>{children}</div>;
};
