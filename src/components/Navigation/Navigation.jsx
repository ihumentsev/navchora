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
              Новини
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/delivery">
              Оплата і доставка
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/partnership">
              Платформа для РА
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/promotion">
              Акції
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/help">
              Допомога
            </StyledLink>
          </NavigateItem>
          <NavigateItem>
            <StyledLink end to="/contacts">
              Контакти
            </StyledLink>
          </NavigateItem>
        </NavigateList>
      </Navigate>
    </>
  );
}
