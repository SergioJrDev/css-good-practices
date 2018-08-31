import React from "react";

const ContentWithDescription = ({ title, content, special }) => (
  <div className="description">
    <h3 className="fs2 sub-title">{title}</h3>
    {content && <p className="mg-lef">{content}</p>}
    {special && special}
  </div>
);

export default ContentWithDescription;
