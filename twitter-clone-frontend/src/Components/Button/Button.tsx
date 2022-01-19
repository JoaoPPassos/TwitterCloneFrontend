import React, { Component, ComponentType, ReactNode } from "react";

import "./styles.scss";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: string;
  icon?: ReactNode;
}

const Button = ({
  text = "texto aqui",
  onClick,
  variant = "",
  icon,
}: ButtonProps) => {
  return (
    <div
      className={`Button ${variant !== "" ? variant : "primary"}`}
      onClick={onClick}
    >
      <div className="Button_Content">
        {icon && icon}

        {text}
      </div>
    </div>
  );
};

export default Button;
