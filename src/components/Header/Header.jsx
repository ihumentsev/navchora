import img from '../../img/whiteLogo.png';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container ';
import Menu from 'components/Menu/Menu';
import ContactItems from 'components/ContactItems/ContactItems';
import LangBox from 'components/LangBox/LangBox';
import CalcForm from 'components/CalcForm/CalcForm';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import caruselImage from '../../img/slider/slider_001.png';
import {
  HeaderHome,
  HeaderImage,
  HeaderMenu,
  HeaderNav,
  WraperCarusel,
} from './Header.styled';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <HeaderHome>
      <Container>
        <HeaderNav>
          <LangBox />
          <Navigation />
          <ContactItems />
        </HeaderNav>
      </Container>

      <HeaderMenu>
        <Container>
          <Menu />
        </Container>
      </HeaderMenu>
      <Container>
        <WraperCarusel>
          <NavLink to="/">
            <HeaderImage src={img} width="280" alt="#" />
          </NavLink>
          <CalcForm />
          <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
              <img src={caruselImage} alt="#" />
            </div>
            <div>
              <img src={caruselImage} alt="#" />
            </div>
            <div>
              <img src={caruselImage} alt="#" />
            </div>
          </Carousel>
        </WraperCarusel>
      </Container>
    </HeaderHome>
  );
}
