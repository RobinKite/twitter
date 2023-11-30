import { Link } from "@mui/material";
import { FooterContainer, FooterLink } from "./styleSX";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const items = [
    "About",
    "Download the X app",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "X for Business",
    "Developers",
    "Directory",
    "Settings",
  ];

  return (
    <FooterContainer component="footer">
      {items.map((item, index) => (
        <FooterLink
          key={index}
          variant="body2"
          component={Link}
          underline="hover"
          href="#">
          {item}
        </FooterLink>
      ))}
      <FooterLink variant="body2">&copy; {currentYear} X Corp.</FooterLink>
    </FooterContainer>
  );
};
