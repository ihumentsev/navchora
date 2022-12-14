import styled from 'styled-components';
const HeaderHome = styled.header`
  background: linear-gradient(98.82deg, #2173ef 15.6%, #c03cd6 85.6%);
  padding-bottom: 40px;
  @media screen and (min-width: 1000px) {
    padding-bottom: 80px;
  }
`;
const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const HeaderMenu = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 90px;
  margin-bottom: 80px;
`;
const HeaderImage = styled.img`
  margin-bottom: 40px;
`;
const WraperCarusel = styled.div`
  position: relative;
  & .carousel-root {
    width: 100%;
    display: block;
    margin-top: 80px;
    /* position: absolute; */
    /* top: 40px; */
    /* right: 0; */
  }
  @media screen and (min-width: 1000px) {
    & .carousel-root {
      width: 470px;
      position: absolute;
      top: 40px;
      right: 0;
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1216px) {
    & .carousel-root {
      width: 485px;
      position: absolute;
      top: 40px;
      right: 0;
    }
  }
  & .control-dots {
    position: absolute;
    bottom: 30px;
    left: -350px;
  }
  & .dot {
    background: #e8e8e8;
  }
  & .dot.selected {
    background: linear-gradient(98.82deg, #2173ef 15.6%, #c03cd6 85.6%);
  }
  & .carousel .slide .legend {
    display: none;
  }
  & .carousel.carousel-slider {
    overflow: visible;
  }
  & .thumbs {
    display: none;
  }
  & .control-arrow {
    display: none;
  }
  & .carousel-status {
    display: none;
  }
`;
export { HeaderHome, HeaderNav, HeaderMenu, HeaderImage, WraperCarusel };
