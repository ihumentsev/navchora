import styled from 'styled-components';
const CalcTitle = styled.h2`
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 27px;
  color: #ffffff;
`;
const CalcText = styled.p`
  width: 100%;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  /* or 32px */
  color: #ffffff;
  @media screen and (min-width: 1000px) {
    width: 470px;
  }
  @media screen and (min-width: 1216px) {
    width: 597px;
  }
`;
const CalcBtn = styled.button`
  cursor: pointer;
  border: none;
  height: 49px;
  width: 215px;
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #2e2e2e;
  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    border: 2px solid linear-gradient(to right top, blue, skyblue, blue);
    border-image-source: linear-gradient(to right top, blue, skyblue, blue);
    border-image-source: linear-gradient(
      98.82deg,
      #0048b6 15.6%,
      #86009c 85.6%
    );
  }
`;

export { CalcTitle, CalcText, CalcBtn };
