import ReactPlayer from 'react-player';
import styled from 'styled-components';

const SectionAbout = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  @media screen and (min-width: 1000px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
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
  flex-wrap: wrap;
  @media screen and (min-width: 1000) {
    display: flex;
  }
`;
const TextAbout = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #2e2e2e;
  margin-top: 0;
  margin-bottom: 40px;
  @media screen and (min-width: 1000px) {
    width: 470px;
    margin-right: 20px;
    margin-bottom: 0;
    /* width: 470px; */
  }
  @media screen and (min-width: 1216px) {
    /* width: 495px; */
    margin-right: 123px;
  }
`;
const Player = styled(ReactPlayer)`
  width: 400px;
  height: 300px;
  @media screen and (min-width: 1000px) {
    width: 470px;
  }
  @media screen and (min-width: 1216px) {
    width: 598px;
  }
`;
export {
  SectionAbout,
  SectionTitle,
  LinkAbout,
  IconLink,
  WraperBox,
  TextAbout,
  Player,
};
