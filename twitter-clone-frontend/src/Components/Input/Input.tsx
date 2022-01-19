import React from "react";

interface InputProps {
  onChange: (target: any) => void;
  placeholder?: string;
}
const Input = ({ onChange, placeholder = "placeholder" }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
