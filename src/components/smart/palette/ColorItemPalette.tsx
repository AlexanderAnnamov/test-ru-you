import React from "react";

import deleteImg from "../../../assets/images/iconmonstr-x-mark-lined.svg";

import type { ColorItemPaletteProps } from "../../../types/paletteTypes";

import styles from "./Palette.module.scss";

export const ColorItemPalette: React.FC<ColorItemPaletteProps> = ({
  colorItem,
  deleteColorItem,
  editColorItem,
  style,
  idx,
}) => {
  const [isVisibleClose, setIsVisibleClose] = React.useState(false);
  return (
    <button
      key={colorItem.id}
      onMouseEnter={() => setIsVisibleClose(true)}
      onMouseLeave={() => setIsVisibleClose(false)}
      onClick={(e) => editColorItem(e, idx)}
      className={style}
      style={{
        backgroundColor: colorItem.color.hex,
      }}
    >
      {isVisibleClose && (
        <button
          className={styles.paletteComponent__buttonDelete}
          onClick={(e) => deleteColorItem(e, colorItem.id)}
        >
          <img src={deleteImg} />
        </button>
      )}
    </button>
  );
};
