// import '../CalcForm/CalcForm.scss';

import { CalcBtn, CalcText, CalcTitle } from './Calc.styled';

export default function CalcForm() {
  return (
    <div className="calc_wraper">
      <CalcTitle className="calc_title">Оперативная полиграфия</CalcTitle>
      <CalcText className="calc_text">
        предлагает широкий спектр полиграфических услуг, изготовление любого
        тиража на современном печатном оборудовании на выгодных и
        привлекательных для Вас условиях!
      </CalcText>
      <CalcBtn className="calc_btn" type="button">
        Отправить заявку
      </CalcBtn>
    </div>
  );
}
