import styled from 'styled-components';
const MenuWraper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0;
  display: flex;
  align-items: center;
`;
const MenuLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  &:last-child {
    margin-left: 48px;
  }
`;
const LinkImage = styled.img`
  margin-right: 10px;
`;

const MenuImput = styled.input`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  height: 50px;
  width: 600px;
  margin-right: 108px;
  margin-left: 165px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #b4b4b4;
`;
export { MenuWraper, MenuLink, LinkImage, MenuImput };
