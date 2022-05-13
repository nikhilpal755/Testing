import React from "react";

import "./Backdrop.styles.css";

const Backdrop = ({ handleClick }) => (
  <div className="backdrop" onClick={handleClick} />
);

export default Backdrop;
