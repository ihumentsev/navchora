import styled from 'styled-components';

const SectionDiv = styled.section`
  background: #f9f9f9;
  border-radius: 4px;
  /* width: 1920px; */

  @media screen and (min-width: 1000px) {
    height: 508px;
  }
`;
const WraperContent = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;
const ImageDesign = styled.img`
  /* width: 480px; */
  @media screen and (min-width: 1000px) {
    width: 470px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1216px) {
    margin-right: 123px;
  }
`;
const WraperText = styled.div`
  @media screen and (min-width: 1000px) {
    width: 470px;
  }
  @media screen and (min-width: 1216px) {
    width: 598px;
  }
`;
const SectionTitle = styled.h2`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 37px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 1216px) {
    margin-top: 80px;
  }
`;
const TextParagraph = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin-bottom: 55px;
  margin-top: 0;
`;
const Button = styled.button`
  background: linear-gradient(98.82deg, #2173ef 15.6%, #c03cd6 85.6%);
  box-shadow: 0px 6px 10px rgba(192, 60, 214, 0.2);
  border-radius: 50px;
  border: none;
  width: 209px;
  height: 49px;
  &:hover {
    background: linear-gradient(98.82deg, #0048b6 15.6%, #86009c 85.6%);
    box-shadow: 0px 3px 5px rgba(134, 0, 156, 0.3);
    border-radius: 50px;
  }

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 40px;
  @media screen and (min-width: 1000px) {
    margin-bottom: 0;
  }
`;
export {
  SectionDiv,
  WraperContent,
  ImageDesign,
  WraperText,
  SectionTitle,
  TextParagraph,
  Button,
};
