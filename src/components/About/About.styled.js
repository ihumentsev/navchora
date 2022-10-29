import styled from 'styled-components';

const SectionAbout = styled.section`
  padding-top: 240px;
  padding-bottom: 160px;
`;
const SectionTitle = styled.h2`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 37px;
  margin-bottom: 10px;
`;
const LinkAbout = styled.a`
  text-decoration: none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

const IconLink = styled.img`
  margin-right: 10px;
`;
const WraperBox = styled.div`
  display: flex;
`;
const TextAbout = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #2e2e2e;
  width: 495px;
  margin-right: 123px;
  margin-top: 0;
  margin-bottom: 0;
`;
export {
  SectionAbout,
  SectionTitle,
  LinkAbout,
  IconLink,
  WraperBox,
  TextAbout,
};
