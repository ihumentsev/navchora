import styled from 'styled-components';
const SectionCategories = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;
  @media screen and (min-width: 1000px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  @media screen and (min-width: 1216px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 20px;
  list-style: none;
  padding: 0;
  @media screen and (min-width: 1000px) {
    gap: 38px 20px;
  }
  @media screen and (min-width: 1216px) {
    gap: 40px 20px;
  }
`;
const Item = styled.li`
  width: 440px;
  height: 292px;
  /* transition: 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  @media screen and (min-width: 1000px) {
    width: 470px;
    height: 294px;
  }
  @media screen and (min-width: 1216px) {
    width: 392px;
    height: 292px;
  }
`;
const Link = styled.a`
  text-decoration: none;
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #eeeeee;
  padding: 0;
  color: #757575;
  transition-property: border;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

const Overlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(98.82deg, #2173ef 15.6%, #c03cd6 85.6%);
  box-shadow: 0px 6px 10px rgba(192, 60, 214, 0.2);
  border-radius: 4px;
  transform: translateY(calc(+0% + 295px));
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Link}:hover & {
    transform: translateY(0%);
  }
  ${Link}:focus & {
    transform: translateY(0%);
  }
`;
const Tumb = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0px;
  overflow: hidden;
  line-height: 0;
`;
const ImageItem = styled.img`
  width: 400px;
  height: 170px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1000px) {
    width: 430px;
  }

  @media screen and (min-width: 1216px) {
    width: 352px;
  }
`;
const OverlayTitle = styled.h3`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-left: 20px;
  margin-top: 40px;
  margin-right: 20px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const OverlayText = styled.p`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  /* or 25px */

  color: #ffffff;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const DespirationItem = styled.div`
  padding: 40px 24px;
`;
const DespirationTitle = styled.h2`
  margin: 0;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #2e2e2e;
`;
export {
  SectionCategories,
  List,
  Item,
  Link,
  Overlay,
  Tumb,
  ImageItem,
  OverlayTitle,
  OverlayText,
  DespirationItem,
  DespirationTitle,
};
