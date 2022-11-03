import styled from 'styled-components';
const ContactList = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin-left: auto;
  @media screen and (min-width: 1000px) {
    margin-left: 80px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const ContactLink = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;
export { ContactList, ContactLink };
