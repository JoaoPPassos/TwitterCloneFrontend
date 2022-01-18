import React from "react";

import "./styles.scss";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: string;
}

const Button = ({
  text = "texto aqui",
  onClick,
  variant = "",
}: ButtonProps) => {
  return (
    <div
      className={`Button ${variant !== "" ? variant : "primary"}`}
      onClick={onClick}
    >
      <div className="Button_Content">{text}</div>
    </div>
  );
};

export default Button;
