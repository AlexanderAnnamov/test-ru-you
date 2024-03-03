import React from "react";
import { ColorPicker } from "react-color-palette";

import type { ColorPickerPaletteProps } from "../../../types/paletteTypes";

export const ColorPickerPalette: React.FC<ColorPickerPaletteProps> = ({
  close,
  color,
  setColor,
}) => {
  const root = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const onClick = (e: React.SyntheticEvent) => root.current?.contains(e.target as HTMLDivElement) || close();
    document.addEventListener("click", onClick as () => void);
    return () => document.removeEventListener("click", onClick as () => void);
    
  }, []);

  return (
    <div ref={root}>
      <ColorPicker height={50} color={color} onChange={setColor} />
    </div>
  );
};
