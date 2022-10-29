import '../ContactItems/ContactItems.scss';
export default function ContactItems() {
  return (
    <ul className="contact-list">
      <li className="contact-item">
        <a className="contact-link" href="mailto:info@navchora.com.ua">
          info@navchora.com.ua
        </a>
      </li>
      <li className="contact-item">
        <a className="contact-link" href="tel:+380507408745">
          +38 (050) 740 8 745
        </a>
      </li>
    </ul>
  );
}
