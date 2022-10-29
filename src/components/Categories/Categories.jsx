import {
  DespirationItem,
  DespirationTitle,
  ImageItem,
  Item,
  Link,
  List,
  Overlay,
  OverlayText,
  OverlayTitle,
  SectionCategories,
  Tumb,
} from './Categories.styled';
import image from '../../img/services/service__1.png';
import categoies from '../../utility/Categories.json';

export default function Categories() {
  return (
    <SectionCategories>
      <List class="project-list">
        {categoies.map(item => {
          return (
            <Item class="project-item">
              <Link href="#" class="project-link">
                <Tumb class="project-tumb">
                  <ImageItem width="392" src={image} />
                  <Overlay class="project-overlay">
                    <OverlayTitle>{item.name}</OverlayTitle>
                    <OverlayText class="overlay-text">{item.text}</OverlayText>
                  </Overlay>

                  <DespirationItem class="project-description">
                    <DespirationTitle class="project-title">
                      {item.name}
                    </DespirationTitle>
                  </DespirationItem>
                </Tumb>
              </Link>
            </Item>
          );
        })}
        {/* <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={image} />
              <Overlay class="project-overlay">
                <OverlayTitle>Широкоформатная печать</OverlayTitle>
                <OverlayText class="overlay-text">
                  — это цифровая печать на рулонных материалах (виниловая
                  пленка, бумага, баннерная ткань, сетка). Предназначена для
                  изготовления плакатов, растяжек и элементов более сложных
                  конструкций наружной рекламы.
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  Полиграфия
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item> */}
        {/* <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={image} />
              <Overlay class="project-overlay">
                <OverlayTitle>Широкоформатная печать</OverlayTitle>
                <OverlayText class="overlay-text">
                  — это цифровая печать на рулонных материалах (виниловая
                  пленка, бумага, баннерная ткань, сетка). Предназначена для
                  изготовления плакатов, растяжек и элементов более сложных
                  конструкций наружной рекламы.
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  Полиграфия
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item> */}
      </List>
    </SectionCategories>
  );
}
