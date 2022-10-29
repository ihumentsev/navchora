import styled from 'styled-components';
const LangList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;
const LangItem = styled.li`
  &:nth-child(2) {
    margin-left: 10px;
  }
  &:hover {
    transform: scale(1.25);
  }
`;
const LangLink = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;
export { LangList, LangItem, LangLink };
