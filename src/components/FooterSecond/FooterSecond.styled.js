import styled from 'styled-components';
const FooterSecondBox = styled.footer`
  padding-top: 80px;
  padding-bottom: 80px;
  background: #e8e8e8;
`;
const ContactTitle = styled.h4`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;

const ContactText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #2e2e2e;
`;
const ContactLink = styled.a`
  text-decoration: none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #2e2e2e;
`;
const SocialList = styled.ul`
  margin-top: 20px;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 10px;
`;

const WraperPhone = styled.div`
  margin-bottom: 40px;
`;

const DeveloperItem = styled.li`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #b4b4b4;
`;
export {
  FooterSecondBox,
  ContactTitle,
  ContactText,
  ContactLink,
  SocialList,
  WraperPhone,
  DeveloperItem,
};
