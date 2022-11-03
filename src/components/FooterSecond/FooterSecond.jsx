import Container from 'components/Container/Container ';
import {
  FooterBox,
  FooterItem,
  FooterList,
  ItemLink,
  ListTitle,
} from 'components/FooterFirst/FooterFirst.styled';
import {
  ContactLink,
  ContactText,
  ContactTitle,
  DeveloperItem,
  FooterSecondBox,
  SocialList,
  WraperPhone,
} from './FooterSecond.styled';
import fbIcon from '../../img/icons/social/fb.svg';
import insta from '../../img/icons/social/insta.svg';
import { useIsDesk } from 'Hooks/Hooks';

export default function FooterSecond() {
  const isDeskScreen = useIsDesk();
  return (
    <FooterSecondBox>
      <Container>
        <FooterBox className="wraper">
          {isDeskScreen && (
            <div className="footer__menu col-xl-3 col-lg-3">
              <ListTitle>Информация</ListTitle>
              <FooterList>
                <FooterItem>
                  <ItemLink href="#!">Новости</ItemLink>
                </FooterItem>
                <FooterItem>
                  <ItemLink href="#!">Оплата и доставка</ItemLink>
                </FooterItem>
                <FooterItem>
                  <ItemLink href="#!">Платформа для РА</ItemLink>
                </FooterItem>
                <FooterItem>
                  <ItemLink href="#!">Акции</ItemLink>
                </FooterItem>
                <FooterItem>
                  <ItemLink href="#!">Помощь</ItemLink>
                </FooterItem>
                <FooterItem>
                  <ItemLink href="#!">Контакты</ItemLink>
                </FooterItem>
              </FooterList>
            </div>
          )}

          <div className="footer__inf col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="address">
              <ContactTitle>Адрес:</ContactTitle>
              <ContactLink href="https://goo.gl/maps/pKP3HiVAZMcDCzVi7">
                <ContactText>
                  Украина, г.Киев
                  <br />
                  ул. Василия Яна, 3/5
                </ContactText>
              </ContactLink>
            </div>
            <div className="time">
              <ContactTitle>Режим работы:</ContactTitle>
              <ContactText>
                Пн - Пт 10:00 - 19:00
                <br />
                Сб - Вс Выходной
              </ContactText>
            </div>
          </div>

          <div className="footer__contact col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <WraperPhone className="phone">
              <ContactTitle>Телефоны:</ContactTitle>
              <ContactLink href="tel:+380507408745">
                +38 (050) 740 8 745
              </ContactLink>
              <br />
              <ContactLink href="tel:+380986255576">
                +38 (098) 62 555 76
              </ContactLink>
            </WraperPhone>
            <div className="email">
              <ContactLink href="mailto:info@navchora.com.ua">
                info@navchora.com.ua
              </ContactLink>
            </div>
            <div className="social">
              <SocialList>
                <li>
                  <a
                    href="https://www.instagram.com/navchora.com.ua/"
                    className="social__insta"
                  >
                    <img src={insta} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/navchora.com.ua/"
                    className="social__fb"
                  >
                    <img src={fbIcon} alt="" />
                  </a>
                </li>
              </SocialList>
            </div>
          </div>

          <div className="footer__copy col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <ListTitle>© Оперативная полиграфия L-Format, 2017</ListTitle>
            <ul>
              <DeveloperItem>
                Full-stack developer — <span>Igumentsev Andrii</span>
              </DeveloperItem>
            </ul>
          </div>
        </FooterBox>
      </Container>
    </FooterSecondBox>
  );
}
