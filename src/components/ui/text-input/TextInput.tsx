import React from "react";

import styles from "./TextInput.module.scss";

type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

export const TextInput: React.FC<TextInputProps> = (props) => {
  const { placeholder} = props;
  return (
    <div className={styles.container}>
      <div className={styles.controlGroup}>
        <input {...props} id="input" name="input" placeholder="" />
        <label htmlFor="input">{placeholder}</label>
      </div>
    </div>
  );
};
