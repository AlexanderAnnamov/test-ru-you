export type Color = {
    hex: string;
    hsv: {
      a: number;
      h: number;
      s: number;
      v: number;
    };
    rgb: {
      a: number;
      b: number;
      g: number;
      r: number;
    };
  };
  
  export type ColorItem = {
    color: Color;
    name: string;
    id: string;
  };
  
  export type Select = number | null;
  
  export type MouseСoordinates = {
    x: number;
    y: number;
  };

  export interface ColorPickerPaletteProps {
    close: () => void;
    color: Color;
    setColor: (color: Color) => void;
  }

  export interface ColorItemPaletteProps {
    colorItem: ColorItem;
    deleteColorItem: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
    editColorItem: (e: React.MouseEvent<HTMLButtonElement>, idx: number) => void;
    style: string;
    idx: number;
  }