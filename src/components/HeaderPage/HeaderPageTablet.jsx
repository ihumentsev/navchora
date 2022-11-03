import img from '../../img/whiteLogo.png';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container ';
import ContactItems from 'components/ContactItems/ContactItems';
import LangBox from 'components/LangBox/LangBox';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  HeaderHome,
  HeaderImage,
  HeaderMenu,
  HeaderNav,
  WraperCarusel,
} from './HeaderPage.styled';
import { NavLink } from 'react-router-dom';
import MenuPage from 'components/MenuPage/MenuPage';

export default function HeaderPageTablet() {
  return (
    <HeaderHome>
      <Container>
        {/* <HeaderNav> */}
        <LangBox />
        {/* <Navigation /> */}
        <ContactItems />
        {/* </HeaderNav> */}
      </Container>
      <HeaderMenu>
        <Container>
          <MenuPage />
        </Container>
      </HeaderMenu>
    </HeaderHome>
  );
}
