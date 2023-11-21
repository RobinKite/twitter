import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const items = [
    "About the community",
    "Reference center",
    "Terms of service",
    "Privacy Policy",
    "Cookies policy",
    "Special features",
    "Blog",
    "State",
    "Career",
    "Brand resources",
    "Advertising",
    "Marketing",
    "X is for business",
    "Developers",
    "Catalogue",
    "Settings",
  ];

  return (
    <footer className={styles.footer}>
      <ul className={styles.footer}>
        {items.map((item) => (
          <li key={item}>
            <button>{item}</button>
          </li>
        ))}
        <span className={styles.XCorp}>&copy; {currentYear} X Corp.</span>
      </ul>
    </footer>
  );
};
