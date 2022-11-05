import Container from 'components/Container/Container ';

import {
  IconLink,
  LinkAbout,
  Player,
  SectionAbout,
  SectionTitle,
  TextAbout,
  WraperBox,
} from './About.styled';
import tag from '../../img/icons/iconLink.svg';

export default function About() {
  return (
    <SectionAbout class="about-us">
      <Container class="container">
        <SectionTitle class="title">Про нас</SectionTitle>
        <LinkAbout href="#!" class="link">
          <IconLink src={tag} />
          Докладніше
        </LinkAbout>

        <WraperBox className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <TextAbout className="about-us__txt">
              Зараз наша компанія є одним із провідних учасників ринку
              поліграфічної продукції України.
              <br />
              <br />
              Наша друкарня випускає широкий асортимент поліграфічної продукції
              від виробництва складної упаковки, багатосмугових каталогів,
              календарів, наклейок, етикеток, до невеликих брошур та буклетів А4
              у два і більше фальців.
              <br />
              <br />
              Ми постійно вдосконалюємо свій професіоналізм для того, щоб завжди
              залишатися гарантом якісного виконання замовлення будь-якої
              складності у обумовлений термін.
              <br />
              <br />
              Нашу працю цінують професіонали. Наш досвід — якість Вашої
              поліграфічної продукції!
            </TextAbout>
          </div>

          <div className="player">
            <Player
              className="play"
              url="https://www.facebook.com/navchora.com.ua/videos/349326213091572"
              width="440"
              height="100%"
            />
          </div>
        </WraperBox>
      </Container>
    </SectionAbout>
  );
}
