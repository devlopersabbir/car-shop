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
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={isDisabled ?? false}
      type={buttonType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
