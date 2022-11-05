import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Navigate = styled.div`
  margin-left: 150px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavigateList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  list-style: none;
`;
const NavigateItem = styled.li`
  /* padding: 10px 20px; */
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  padding: 8px 18px;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover,
  &:focus {
    border: 1px solid #ffffff;
    border-radius: 4px;
  }
  &.active {
    border: 1px solid #ffffff;
    border-radius: 4px;
  }
`;
export { Navigate, NavigateList, NavigateItem, StyledLink };
