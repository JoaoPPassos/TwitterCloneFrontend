import React, { Component, ComponentType, ReactNode } from "react";

import "./styles.scss";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: string;
  icon?: ReactNode;
  outline?: boolean;
}

const Button = ({
  text = "texto aqui",
  onClick,
  variant = "",
  icon,
  outline = false,
  ...props
}: ButtonProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`Button ${variant !== "" ? variant : "primary"} ${
        outline ? "outlined" : ""
      }`}
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
