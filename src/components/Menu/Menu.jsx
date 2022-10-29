import profile from '../../img/icons/profile.svg';
import cart from '../../img/icons/cart.svg';
import catalog from '../../img/icons/catalog.svg';
import { LinkImage, MenuImput, MenuLink, MenuWraper } from './Menu.styled';
export default function Menu() {
  return (
    <MenuWraper>
      <MenuLink>
        <LinkImage src={catalog} />
        Каталог
      </MenuLink>
      <MenuImput placeholder="Поиск..." />
      <MenuLink>
        <LinkImage src={profile} />
        Кабинет
      </MenuLink>

      <MenuLink>
        <LinkImage src={cart} />
        Корзина
      </MenuLink>
    </MenuWraper>
  );
}
