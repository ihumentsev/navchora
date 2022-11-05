import { IconLink, LinkAbout } from 'components/About/About.styled';
import Container from 'components/Container/Container ';
import {
  Box,
  PersonText,
  // PersonTitle,
  ReviewsTitle,
} from 'components/Reviews/Reviews.styled';
import {
  NewsItem,
  NewsList,
  NewsSection,
  PostBox,
  PostImage,
  PostLink,
  PostText,
  PostTitle,
} from './News.styled';
import tag from '../../img/icons/iconLink.svg';
import post1 from '../../img/news/novapochta.jpg';
import post2 from '../../img/news/logo_liqpay_new.jpg';
import post3 from '../../img/news/T-shirt.png';
import post4 from '../../img/news/nocai.jpg';
import calendar from '../../img/icons/calendar.svg';
import { useIsTablet } from 'Hooks/Hooks';

export default function News() {
  const isTabletScreen = useIsTablet();
  return (
    <NewsSection class="latest-news">
      <Container class="container">
        <ReviewsTitle class="title">Останні новини</ReviewsTitle>
        <LinkAbout href="#!" class="link">
          <IconLink src={tag} alt="" />
          Перейти до розділу
        </LinkAbout>

        <NewsList class="row">
          <NewsItem class="news-cl-i col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <PostLink href="#">
              <PostImage src={post1} class="news__img" alt="image-printing" />

              <PostTitle class="news__title">
                Доставка кур'єрською службою Нова пошта
              </PostTitle>
              <PostBox>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText class="date">10 жовтня 2021 р.</PersonText>
                </Box>

                <PostText class="news__text">
                  Відтепер доставкою замовлень займається кур'єрська служба Нова
                  пошта. Оформити доставку, а також розрахувати її вартість
                  можна онлайн на сайті при оформленні замовлення.
                </PostText>
              </PostBox>
            </PostLink>
          </NewsItem>
          <NewsItem class="news-cl-i col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <PostLink href="#">
              <PostImage src={post2} class="news__img" alt="image-printing" />

              <PostTitle class="news__title">
                Реалізована оплата замовлень платіжною сістемою LIQPAY
              </PostTitle>
              <PostBox>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText class="date">15 січня 2022 р.</PersonText>
                </Box>

                <PostText class="news__text">
                  Нарешті можна сплачувати замовлення онлайн порямо на сайті.
                  Відтепер наш сервіс стал ще зручнішим!
                </PostText>
              </PostBox>
            </PostLink>
          </NewsItem>
          {isTabletScreen && (
            <>
              <NewsItem class="news-cl-i col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <PostLink href="#">
                  <PostImage
                    src={post3}
                    class="news__img"
                    alt="image-printing"
                  />

                  <PostTitle class="news__title">Нові можливості!</PostTitle>
                  <PostBox>
                    <Box>
                      <img src={calendar} alt="" />
                      <PersonText class="date">10 березня 2021 г.</PersonText>
                    </Box>

                    <PostText class="news__text">
                      Тепер кожен може спробувати себе на ролі дизайнеру одягу.
                      Ви можете обрати любмй принт із нашої колекціі, або
                      реалізувати свою сміливу ідею.
                    </PostText>
                  </PostBox>
                </PostLink>
              </NewsItem>
              <NewsItem class="news-cl-i col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <PostLink href="#">
                  <PostImage src={post4} alt="image-printing" />

                  <PostTitle class="news__title">
                    Оновлення парку обладнання!
                  </PostTitle>
                  <PostBox>
                    <Box>
                      <img src={calendar} alt="" />
                      <PersonText class="date">13 квітня 2021 г.</PersonText>
                    </Box>

                    <PostText class="news__text">
                      В нашій родині появився новий красунчик. Він може робити
                      неймовірні речі. Друк на сувенірній продукціі: ручки,
                      чашки, брелоки та багато чого іншого.
                    </PostText>
                  </PostBox>
                </PostLink>
              </NewsItem>
            </>
          )}
        </NewsList>
      </Container>
    </NewsSection>
  );
}
