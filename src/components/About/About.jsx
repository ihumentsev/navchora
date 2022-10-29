import Container from 'components/Container/Container ';
import ReactPlayer from 'react-player/lazy';
import {
  IconLink,
  LinkAbout,
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
        <SectionTitle class="title">О нас</SectionTitle>
        <LinkAbout href="#!" class="link">
          <IconLink src={tag} />
          Подробнее
        </LinkAbout>

        <WraperBox class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <TextAbout class="about-us__txt">
              В настоящий момент наша компания является одним из ведущих
              участников рынка полиграфической продукции в Украине.
              <br />
              <br />
              Наша типография выпускает широкий ассортимент полиграфической
              продукции — от производства сложной упаковки, многополосных
              каталогов, календарей, наклеек, этикеток, до небольших брошюр и
              буклетов А4 в два и более фальцев.
              <br />
              <br />
              Мы постоянно совершенствуем свой профессионализм для того, чтобы
              всегда оставаться гарантом качественного выполнения заказа любой
              сложности в условленный срок.
              <br />
              <br />
              Нашу работу ценят профессионалы. Наш опыт — качество Вашей
              полиграфической продукции!
            </TextAbout>
          </div>

          <div class="flx-rt col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <ReactPlayer
              url="https://www.facebook.com/navchora.com.ua/videos/349326213091572"
              width={598}
              height={400}
            />
          </div>
        </WraperBox>
      </Container>
    </SectionAbout>
  );
}