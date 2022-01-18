import React from "react";

interface IconProps {
  outlined?: boolean;
  color?: string;
  name: string;
}
const Icon = ({ outlined = false, name, color = "#ffffff" }: IconProps) => {
  return (
    <i
      className={`${outlined ? "material-outlined-icons" : "material-icons"}`}
      style={{ color: color }}
    >
      {name}
    </i>
  );
};

export default Icon;
