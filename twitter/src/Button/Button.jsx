import React from "react";
import styles from "../Button/Button.module.scss";

const Button = ({ type = "button", onClick, children }) => {
  console.log(children);
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
