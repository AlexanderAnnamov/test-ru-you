import React from "react";
import { useColor } from "react-color-palette";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import {
  addColorItems,
  deleteColorItems,
  editColorItems,
} from "../../../redux/palette-slice/paletteSlice";
import { RootState } from "../../../redux/store";

import type {
  ColorItem,
  Select,
  MouseСoordinates,
} from "../../../types/paletteTypes";

import plusImg from "../../../assets/images/iconmonstr-plus-lined.svg";
import { ColorPickerPalette } from "./ColorPickerPalette";
import { ColorItemPalette } from "./ColorItemPalette";

import styles from "./Palette.module.scss";
import "react-color-palette/css";

export const Palette: React.FC = () => {
  const colorItems = useSelector(
    (state: RootState) => state.palette.colorItems
  );
  const dispatch = useDispatch();

  const [color, setColor] = useColor("hex");
  const [isVisibleColorPicker, setIsVisibleColorPicker] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState<Select>(null);
  const [mouseСoordinates, setMouseCoordinates] =
    React.useState<MouseСoordinates>({ x: 0, y: 0 });

  React.useEffect(() => {
    dispatch(editColorItems({ isSelected: isSelected, color: color }));
  }, [color]);

  const handleToggle = (idx: number) => {
    setIsSelected(idx);
  };

  const editColorItem = (
    e: React.MouseEvent<HTMLButtonElement>,
    idx: number
  ) => {
    setMouseCoordinates({ x: e.pageX, y: e.pageY });
    setIsVisibleColorPicker(true);
    e.stopPropagation();
    handleToggle(idx);
  };
  const deleteColorItem = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.stopPropagation();
    dispatch(deleteColorItems(id));
  };

  const addColorItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMouseCoordinates({ x: e.pageX, y: e.pageY });
    setIsVisibleColorPicker(true);
    setIsSelected(colorItems.length);
    dispatch(addColorItems({ color: color, name: color.hex, id: nanoid() }));
  };

  const closeColorPicker = () => {
    setIsVisibleColorPicker(false);
    setIsSelected(null);
  };
  return (
    <div className={styles.paletteComponent}>
      {isVisibleColorPicker && (
        <div
          className={styles.paletteComponent__colorPicker}
          style={{
            left: mouseСoordinates.x,
            top: mouseСoordinates.y,
          }}
        >
          <ColorPickerPalette
            color={color}
            setColor={setColor}
            close={closeColorPicker}
          />
        </div>
      )}
      <div className={styles.paletteComponent__items}>
        {colorItems.map((item: ColorItem, idx: number) => (
          <ColorItemPalette
            key={item.id}
            style={
              isSelected === idx
                ? styles.paletteComponent__selected
                : styles.paletteComponent__notSelected
            }
            idx={idx}
            editColorItem={editColorItem}
            deleteColorItem={deleteColorItem}
            colorItem={item}
          />
        ))}
        <button
          className={styles.paletteComponent__buttonAdd}
          onClick={(e) => addColorItem(e)}
        >
          <img src={plusImg} />
        </button>
      </div>
    </div>
  );
};
