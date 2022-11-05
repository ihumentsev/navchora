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
// import image from '../../img/services/service__1.png';
import suvenir from '../../img/services/1.jpg';
import baners from '../../img/services/Баннери.jpg';
import polygraphy from '../../img/services/polygraphy.jpg';
import large from '../../img/services/для банера.jpg';
import uv from '../../img/services/uv.jpg';
import holst from '../../img/services/Холст с натяжкой2.png';
// import categoies from '../../utility/Categories.json';

export default function Categories() {
  return (
    <SectionCategories>
      <List class="project-list">
        {/* {categoies.map(item => {
          return (
            <Item class="project-item" key={item.name}>
              <Link href="#" class="project-link">
                <Tumb class="project-tumb">
                  <ImageItem width="392" src={polygraphy} />
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
        })} */}
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
        <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={polygraphy} alt="Цифровий друк" />
              <Overlay class="project-overlay">
                <OverlayTitle>Цифровий друк</OverlayTitle>
                <OverlayText class="overlay-text">
                  — це цифровий друк на листових матеріалах. Призначена для
                  оперативного виконання замовлень. ідеальне рішення для
                  швидкого запуску рекламної кампанії
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  Поліграфія
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item>
        <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={baners} alt="Широкоформатний друк" />
              <Overlay class="project-overlay">
                <OverlayTitle>Широкоформатний друк</OverlayTitle>
                <OverlayText class="overlay-text">
                  — друк на рулонних матеріалах (вініловий плівка, папір,
                  банерна тканина, сітка). Придназначена для виготовлення
                  плакатів, розтяжок та елементів складніших конструкцій
                  зовнішньої реклами
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  Широкоформатний друк
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item>
        <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={uv} alt="УФ друк" />
              <Overlay class="project-overlay">
                <OverlayTitle>УФ друк на листових матеріалах</OverlayTitle>
                <OverlayText class="overlay-text">
                  — друк на листових матеріалах (ПВХ, акрил, скло, композит та
                  інші). Екологічна, не має неприємних запахів, ідеальне рішення
                  для оформлення інтер'єрів!
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  УФ друк
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item>
        <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={suvenir} alt="Сувенірна продукція" />
              <Overlay class="project-overlay">
                <OverlayTitle>Сувенірна продукція</OverlayTitle>
                <OverlayText class="overlay-text">
                  — друк на різноманітних матеріалах (пляшки, ручки, футболки,
                  торби, композит та інші). Можливий друк на циліндричних
                  поверхнях!
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  Сувенірна продукція
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item>
        <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={large} alt="Рекламні конструкціі" />
              <Overlay class="project-overlay">
                <OverlayTitle>Рекламні конструкціі</OverlayTitle>
                <OverlayText class="overlay-text">
                  — Роллапи, павуки, стійки вказівники, стійки для каталогів та
                  інші вироби.
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  Рекламні конструкціі
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item>
        <Item class="project-item">
          <Link href="#" class="project-link">
            <Tumb class="project-tumb">
              <ImageItem width="392" src={holst} alt="печать на холсте" />
              <Overlay class="project-overlay">
                <OverlayTitle>Інтер'єрний друк</OverlayTitle>
                <OverlayText class="overlay-text">
                  — друк на фотопапері, холстах.
                </OverlayText>
              </Overlay>

              <DespirationItem class="project-description">
                <DespirationTitle class="project-title">
                  Інтер'єрний друк
                </DespirationTitle>
              </DespirationItem>
            </Tumb>
          </Link>
        </Item>
      </List>
    </SectionCategories>
  );
}
