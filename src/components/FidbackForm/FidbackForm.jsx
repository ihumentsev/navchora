import {
  FidbackBox,
  FidbackInput,
  FidbackSection,
  FidbackText,
  FidbackTitle,
  Form,
  FormWraper,
  InputText,
} from './FidbackForm.styled';
import formImage from '../../img/hand.png';
import { Button } from 'components/DesignSection/DesignSection.styled';

export default function FidbackForm() {
  return (
    <FidbackSection>
      <FidbackBox class="callback">
        <div class="callback__img">
          <img src={formImage} alt="Рука с телефоном" />
        </div>
        <FormWraper class="callback__form">
          <FidbackTitle class="callback__title">
            Не знаете, с чего начать?
          </FidbackTitle>
          <FidbackText class="callback__text">
            Наш менеджер с радостью
            <br />
            Вам поможет!
          </FidbackText>
          <Form action="">
            <FidbackInput type="tel" name="phone" placeholder="+380" />
            <Button class="callback__btn" type="submit">
              Заказать звонок
            </Button>
          </Form>
        </FormWraper>
      </FidbackBox>
    </FidbackSection>
  );
}
