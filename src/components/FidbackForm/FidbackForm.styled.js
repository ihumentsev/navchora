import styled from 'styled-components';

const FidbackSection = styled.section`
  padding-bottom: 160px;
`;
const FidbackBox = styled.div`
  display: flex;
  @media screen and (min-width: 1000px) {
    justify-content: center;
  }
`;
const FidbackImage = styled.img`
  width: 228px;
  @media screen and (min-width: 1000px) {
    width: 343px;
  }
`;
const FidbackTitle = styled.h3`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 27px;
  margin-top: 50px;
  margin-bottom: 3px;
`;

const FidbackText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin: 0;
`;

const FidbackInput = styled.input`
  width: 250px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;

  @media screen and (min-width: 1000px) {
    width: 335px;
    margin-bottom: 20px;
  }
`;
const FormWraper = styled.div`
  margin-left: 20px;
  max-width: 210px;
  @media screen and (min-width: 1000px) {
    max-width: 335px;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 38px;
  @media screen and (min-width: 1000px) {
    flex-direction: column;
  }
  & .callback__btn {
    width: 170px;
    font-size: 12px;
    margin-bottom: 0;
  }
`;
export {
  FidbackSection,
  FidbackBox,
  FidbackTitle,
  FidbackText,
  FidbackInput,
  FormWraper,
  Form,
  FidbackImage,
};
