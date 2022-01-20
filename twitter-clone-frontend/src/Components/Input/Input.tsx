import React, { useEffect, useRef, useState } from "react";

import "./styles.scss";
interface InputProps {
  onChange?: (target: any) => void;
  readonly?: boolean;
  placeholder?: string;
}
const Input = ({
  onChange = undefined,
  readonly = false,
  placeholder = "placeholder",
}: InputProps) => {
  const [hover, setHover] = useState<boolean>(false);
  let ref = useRef<HTMLDivElement>(null);
  let inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (hover && ref.current && !ref.current.contains(e.target)) {
        setHover(false);
      } else {
        setHover(true);
      }
    };
    if (hover) {
      document.addEventListener("mousedown", checkIfClickedOutside);
    } else {
      document
        .getElementsByClassName("Input")
        .item(0)
        ?.addEventListener("mousedown", checkIfClickedOutside);
    }

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [hover]);

  useEffect(() => {
    if (hover && inputRef.current) {
      console.log("entrou");
      inputRef.current.focus();
    }
  }, [hover]);

  return (
    <div className={`Input ${hover ? "hover" : ""}`} ref={ref}>
      <div className="Input_Placeholder">
        <span>{placeholder}</span>
      </div>
      <input
        ref={inputRef}
        readOnly={readonly}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
