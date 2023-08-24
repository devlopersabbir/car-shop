import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
  title: string;
  containerStyle?: string;
  isDisabled?: boolean;
  buttonType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
