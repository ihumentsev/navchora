import { ContactLink, ContactList } from './ContactItem.styled';

export default function ContactItems() {
  return (
    <ContactList className="contact-list">
      {/* <li className="contact-item">
        <ContactLink
          className="contact-link"
          href="mailto:info@navchora.com.ua"
        >
          info@navchora.com.ua
        </ContactLink>
      </li> */}
      <li className="contact-item">
        <ContactLink className="contact-link" href="tel:+380507408745">
          +38 (050) 740 8 745
        </ContactLink>
      </li>
    </ContactList>
  );
}
