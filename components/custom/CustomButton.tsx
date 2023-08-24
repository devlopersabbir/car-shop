"use client";
import { ICustomButtonProps } from "@/utils";
import Image from "next/image";
import React from "react";

const CustomButton: React.FC<ICustomButtonProps> = ({
  title,
  containerStyle,
  handleClick,
  isDisabled,
  buttonType,
}) => {
  return (
    <button
      disabled={isDisabled ?? false}
      type={buttonType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
