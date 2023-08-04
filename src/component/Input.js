import React from "react";
import { useState } from "react";
import App from "../App";
import "../style/index.scss";
const Input = ({ text }) => {
  return (
    <div className="input">
      <textarea value={text} type="text" />
    </div>
  );
};
export default Input;
