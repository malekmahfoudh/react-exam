// Button.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

function Button({ to, children }) {
  return (
    <Link to={to} className={style.button}>
      {children}
    </Link>
  );
}

export default Button;
