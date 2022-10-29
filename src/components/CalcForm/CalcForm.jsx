import '../CalcForm/CalcForm.scss';

export default function CalcForm() {
  return (
    <div className="calc_wraper">
      <h2 className="calc_title">Оперативная полиграфия</h2>
      <p className="calc_text">
        предлагает широкий спектр полиграфических услуг, изготовление любого
        тиража на современном печатном оборудовании на выгодных и
        привлекательных для Вас условиях!
      </p>
      <button className="calc_btn" type="button">
        Отправить заявку
      </button>
    </div>
  );
}
