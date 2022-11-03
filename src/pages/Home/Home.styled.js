import styled from 'styled-components';

const MainBox = styled.main`
  /* text-align: center; */
  padding-top: 162px;
`;
const AdvantagWraperDiv = styled.div`
  /* display: flex; */
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  /* margin-right: 140px;
  &:nth-child(4) {
    margin-right: 0;
  } */
`;
const Image = styled.img`
  /* width: 58px;
  height: 58px;
  &:nth-child(3) {
    width: 74px;
    height: 58px;
  } */
`;
const Text = styled.p`
  margin-left: 20px;
  width: 130px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

export { MainBox, AdvantagWraperDiv, List, Item, Text, Image };
