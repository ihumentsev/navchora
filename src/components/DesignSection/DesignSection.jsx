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
import Container from 'components/Container/Container ';

export default function DesignSection() {
  return (
    <SectionDiv class="design">
      <Container class="container">
        <WraperContent class="row flx-rev">
          {/* <div class="design__image col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12"> */}
          <ImageDesign src={img} alt="designer-work" />
          {/* </div> */}

          <WraperText class="design__info col-xl-6 col-lg-6 col-md-5 col-sm-12 col-12">
            <SectionTitle class="title">Дизайн макетов</SectionTitle>
            <TextParagraph class="design__text">
              Печать любой полиграфической продукции начинается с создания
              дизайн-макета. От того, насколько продуманно и качественно он
              будет разработан, напрямую зависит и качество готового продукта.
            </TextParagraph>
            <TextParagraph class="design__text">
              Печать любой полиграфической продукции начинается с создания
              дизайн-макета. От того, насколько продуманно и качественно он
              будет разработан, напрямую зависит и качество готового продукта.
            </TextParagraph>
            <div>
              <Button class="design__order" type="button">
                заказать дизайн
              </Button>
            </div>
          </WraperText>
        </WraperContent>
      </Container>
    </SectionDiv>
  );
}
