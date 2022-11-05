import {
  Button,
  ImageDesign,
  SectionDiv,
  SectionTitle,
  TextParagraph,
  WraperContent,
  WraperText,
} from './DesignSection.styled';
import img from '../../img/design.png';
import imgMobile from '../../img/designMobile.png';

import Container from 'components/Container/Container ';
import { useIsMobile, useIsTablet } from 'Hooks/Hooks';

export default function DesignSection() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <SectionDiv class="design">
      <Container class="container">
        <WraperContent class="row flx-rev">
          {/* <div class="design__image col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12"> */}
          {isTablet && <ImageDesign src={img} alt="designer-work" />}
          {/* </div> */}

          <WraperText class="design__info col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12">
            <SectionTitle class="title">Дизайн макетів</SectionTitle>
            <TextParagraph class="design__text">
              Друк будь-якої поліграфічної продукції починається зі створення
              дизайн-макет. Від того, наскільки продумано та якісно він буде
              розроблено, безпосередньо залежить і якість готового продукту.
            </TextParagraph>
            <TextParagraph class="design__text">
              Ви можете замовити у нас індивідуальний дизайн Вашої поліграфії
              або вибрати стандартизований шаблон з нашої колекції макетів і
              лише внести свої дані.
            </TextParagraph>
            <div>
              <Button class="design__order" type="button">
                Замовити дизайн
              </Button>
            </div>
          </WraperText>
        </WraperContent>
      </Container>
      {isMobile && <img src={imgMobile} alt="designer-work" width="100%" />}
    </SectionDiv>
  );
}
