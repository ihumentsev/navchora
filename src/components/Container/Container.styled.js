import styled from 'styled-components';

const ContainerBox = styled.div`
  max-width: 1216px;
  padding: 0 20px;
  margin: 0 auto;

  /* @media screen and (min-width: 480px) {
    width: 480px;
  } */

  @media screen and (min-width: 1000px) {
    width: 960px;
    /* padding-left: 15px;
    padding-right: 15px; */
  }

  @media screen and (min-width: 1216px) {
    width: 1216px;
    padding: 0;
  }
`;
export { ContainerBox };
