import React from "react";
import PrismCode from "react-prism";

const CodeWrapper = ({ children, lang = "javascript" }) => (
  <span className="code-wrapper">
    <PrismCode className={`language-${lang}`}>{children}</PrismCode>
  </span>
);

export default CodeWrapper;
