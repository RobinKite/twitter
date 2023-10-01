import React from "react";
import styles from "./Footer.module.scss"
import classNames from "classnames";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classNames(styles.footer)}
    //   className={`p-3 flex flex-col justify-center text-lightText w-full text-xs
 
    >
      <ul className={classNames(styles.footer)}>
        <li >
          <a href="#">About the community</a>
        </li>
        <li>
          <a href="#">Reference center</a>
        </li>
        <li>
          <a href="#">Terms of service</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Cookies policy</a>
        </li>
        <li>
          <a href="#">Special features</a>
        </li>
        <li>
          <a href="#">Special features</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">State</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">Brand resources</a>
        </li>
        <li>
          <a href="#">Advertising</a>
        </li>
        <li>
          <a href="#">Marketing</a>
        </li>
        <li>
          <a href="#">X is for business</a>
        </li>
        <li>
          <a href="#">Developers</a>
        </li>
        <li>
          <a href="#">Catalogue</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      <span className={classNames(styles.XCorp) }>&copy; {currentYear} X Corp.</span>
      </ul>
      
    </footer>
  );
};

export default Footer;
