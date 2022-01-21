import React from "react";

import "./styles.scss";

interface Separator {
  text: string;
}
const Separator = ({ text }: Separator) => {
  return (
    <div className="Separator">
      <div className="Separator_Line" />
      <div className="Separator_Text">{text}</div>
      <div className="Separator_Line" />
    </div>
  );
};

export default Separator;
