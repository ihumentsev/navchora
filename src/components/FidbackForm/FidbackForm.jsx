import {
  FidbackBox,
  FidbackImage,
  FidbackInput,
  FidbackSection,
  FidbackText,
  FidbackTitle,
  Form,
  FormWraper,
  // InputText,
} from './FidbackForm.styled';
import formImage from '../../img/hand.png';
import formImageMobile from '../../img/HandMobile.png';
import { Button } from 'components/DesignSection/DesignSection.styled';
import Container from 'components/Container/Container ';
import { useIsMobile, useIsTablet } from 'Hooks/Hooks';

export default function FidbackForm() {
  const isMobailScreen = useIsMobile();
  const isTabletScreen = useIsTablet();
  console.log(isMobailScreen);
  console.log(isTabletScreen);

  if (isMobailScreen) {
    return (
      <FidbackSection>
        <FidbackBox class="callback">
          <div class="callback__img">
            <FidbackImage src={formImageMobile} alt="Рука с телефоном" />
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
          </FormWraper>
        </FidbackBox>
        <Form action="">
          <FidbackInput type="tel" name="phone" placeholder="+380" />
          <Button className="callback__btn" type="submit">
            Заказать звонок
          </Button>
        </Form>
      </FidbackSection>
    );
  }
  if (isTabletScreen) {
    return (
      <FidbackSection>
        <Container>
          <FidbackBox class="callback">
            <div class="callback__img">
              <FidbackImage src={formImage} alt="Рука с телефоном" />
            </div>
            <FormWraper class="callback__form">
              <FidbackTitle class="callback__title">
                Не знаєте з чого почати?
              </FidbackTitle>
              <FidbackText class="callback__text">
                Наш менеджер із радістю
                <br />
                Вам дапоможе!
              </FidbackText>
              <Form action="" className="forma-forma">
                <FidbackInput type="tel" name="phone" placeholder="+380" />
                <Button class="callback__btn" type="submit">
                  Замовити звінок
                </Button>
              </Form>
            </FormWraper>
          </FidbackBox>
        </Container>
      </FidbackSection>
    );
  }
}
