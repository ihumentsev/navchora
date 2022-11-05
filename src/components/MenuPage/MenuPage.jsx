import profile from '../../img/icons/profile.svg';
import cart from '../../img/icons/cart.svg';
import catalog from '../../img/icons/catalog.svg';
import {
  LinkImage,
  MenuImput,
  MenuLink,
  MenuWraper,
  HeaderImage,
} from './MenuPage.styled';

import img from '../../img/whiteLogo.png';
import { NavLink } from 'react-router-dom';

export default function MenuPage() {
  return (
    <MenuWraper>
      <NavLink to="/">
        <HeaderImage src={img} alt="#" />
      </NavLink>
      <MenuImput placeholder="Поиск..." />
      <MenuLink>
        <LinkImage src={catalog} />
        Каталог
      </MenuLink>
      <MenuLink>
        <LinkImage src={profile} />
        Кабінет
      </MenuLink>

      <MenuLink>
        <LinkImage src={cart} />
        Кошик
      </MenuLink>
    </MenuWraper>
  );
}
