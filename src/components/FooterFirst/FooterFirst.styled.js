import styled from 'styled-components';
const FooterFirstBox = styled.footer`
  padding-top: 80px;
  padding-bottom: 80px;
  background: #f9f9f9;
`;
const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListTitle = styled.h3`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;
const FooterItem = styled.li``;
const ItemLink = styled.a`
  text-decoration: none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #2e2e2e;
  border-bottom: 1px solid #b4b4b4;
`;
export {
  FooterFirstBox,
  FooterBox,
  ListTitle,
  FooterList,
  FooterItem,
  ItemLink,
};
