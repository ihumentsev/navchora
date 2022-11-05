// import '../CalcForm/CalcForm.scss';

import { CalcBtn, CalcText, CalcTitle } from './Calc.styled';

export default function CalcForm() {
  return (
    <div className="calc_wraper">
      <CalcTitle className="calc_title">
        Онлайн-центр поліграфічних послуг
      </CalcTitle>
      <CalcText className="calc_text">
        пропонує широкий спектр поліграфічних послуг, виготовлення будь-якого
        тиражу на сучасному друкарському устаткуванні на вигідних та привабливих
        для Вас умовах!
      </CalcText>
      <CalcBtn className="calc_btn" type="button">
        Відправити заявку
      </CalcBtn>
    </div>
  );
}
