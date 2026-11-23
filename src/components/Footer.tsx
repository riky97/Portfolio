import { useLocale } from "@/i18n/locale-context";
import { contact } from "../data/cv";
import "./Footer.css";

export function Footer() {
  const { messages } = useLocale();

  return (
    <footer className="footer">
      <div className="site-container footer__row">
        <p>© {new Date().getFullYear()} {contact.name}</p>
        <a href="#top">{messages.footer.backToTop}</a>
      </div>
    </footer>
  );
}
