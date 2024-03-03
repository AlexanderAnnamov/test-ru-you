import React from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button {...props}>{children}</button>;
};
