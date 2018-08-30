import React from "react";
import PrismCode from "react-prism";

const CodeWrapper = ({ children, lang = "javascript" }) => (
  <div className="code-wrapper">
    <PrismCode className={`language-${lang}`}>{children}</PrismCode>
  </div>
);

export default CodeWrapper;
