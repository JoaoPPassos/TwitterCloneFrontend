import React, { useEffect, useRef, useState } from "react";
import { Icon } from "..";

import "./styles.scss";
interface InputProps {
  onChange?: (target: any) => void;
  readonly?: boolean;
  placeholder?: string;
  password?: boolean;
}
const Input = ({
  onChange = undefined,
  readonly = false,
  placeholder = "placeholder",
  password = false,
}: InputProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  let ref = useRef<HTMLDivElement>(null);
  let inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        hover &&
        ref.current &&
        !ref.current.contains(e.target) &&
        inputRef.current?.value.length === 0
      ) {
        setHover(false);
      } else if (!hover && ref.current && ref.current.contains(e.target)) {
        setHover(true);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [hover]);

  const handlePasswordView = () => setShowPass(!showPass);

  return (
    <div className={`Input ${!readonly && hover ? "hover" : ""}`} ref={ref}>
      <div className="Input_Placeholder">
        <span>{placeholder}</span>
      </div>
      <input
        ref={inputRef}
        readOnly={readonly}
        type={`${password && showPass ? "text" : "password"}`}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {password && (
        <div onClick={handlePasswordView} className="Input_HandleShowPassword">
          {showPass ? (
            <Icon name="visibility" />
          ) : (
            <Icon name="visibility_off" />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
