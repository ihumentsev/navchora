import styled from 'styled-components';

const FidbackSection = styled.section`
  padding-bottom: 160px;
`;
const FidbackBox = styled.div`
  display: flex;
  justify-content: center;
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
  width: 335px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin-bottom: 20px;
`;
const FormWraper = styled.div`
  margin-left: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
`;
export {
  FidbackSection,
  FidbackBox,
  FidbackTitle,
  FidbackText,
  FidbackInput,
  FormWraper,
  Form,
};
