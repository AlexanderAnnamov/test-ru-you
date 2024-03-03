import { Palette } from "../../components/smart/palette/Palette";

import styles from "./Palette.module.scss";

export const PalettePage = () => {
  return (
    <div className={styles.palettePage} style={{ padding: "20px 30px" }}>
      <Palette />
    </div>
  );
};
