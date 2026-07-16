import { contact } from "../data/cv";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <p>© {new Date().getFullYear()} {contact.name}</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
