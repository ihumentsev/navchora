import { NavLink } from 'react-router-dom';
// import css from '../Navigation/Navigation.module.css';
import {
  Navigate,
  NavigateItem,
  NavigateList,
  StyledLink,
} from './Navigation.styled';
export default function Navigation() {
  return (
    <>
      <Navigate>
        <NavigateList>
          <NavigateItem>
            <StyledLink end to="/news">
              Новости
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/delivery">
              Оплата и доставка
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/partnership">
              Платформа для РА
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/promotion">
              Акции
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/help">
              Помощь
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/contacts">
              Контакты
            </StyledLink>
          </NavigateItem>
        </NavigateList>
      </Navigate>
    </>
  );
}
