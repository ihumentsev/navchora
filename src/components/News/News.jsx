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
import post1 from '../../img/news/post__1.png';
import post2 from '../../img/news/post__2.png';
import post3 from '../../img/news/post__3.png';
import post4 from '../../img/news/post__4.png';
import calendar from '../../img/icons/calendar.svg';
import { useIsTablet } from 'Hooks/Hooks';

export default function News() {
  const isTabletScreen = useIsTablet();
  return (
    <NewsSection class="latest-news">
      <Container class="container">
        <ReviewsTitle class="title">Последние новости</ReviewsTitle>
        <LinkAbout href="#!" class="link">
          <IconLink src={tag} alt="" />
          Перейти в раздел
        </LinkAbout>

        <NewsList class="row">
          <NewsItem class="news-cl-i col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <PostLink href="#">
              <PostImage src={post1} class="news__img" alt="image-printing" />

              <PostTitle class="news__title">
                Оказывается, объемы выросли
              </PostTitle>
              <PostBox>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText class="date">10 марта 2020 г.</PersonText>
                </Box>

                <PostText class="news__text">
                  Являясь всего лишь частью общей картины, активно развивающиеся
                  страны третьего мира и по сей день остаются уделом либералов,
                  которые жаждут быть обнародованы.
                </PostText>
              </PostBox>
            </PostLink>
          </NewsItem>
          <NewsItem class="news-cl-i col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <PostLink href="#">
              <PostImage src={post2} class="news__img" alt="image-printing" />

              <PostTitle class="news__title">
                Политика не может не реагировать на звон колоколов
              </PostTitle>
              <PostBox>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText class="date">10 марта 2020 г.</PersonText>
                </Box>

                <PostText class="news__text">
                  Банальные, но неопровержимые выводы, а также ключевые
                  особенности структуры проекта, инициированные исключительно
                  синтетически, описаны максимально подробно.
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

                  <PostTitle class="news__title">
                    Неподкупность государственных СМИ разочаровала!
                  </PostTitle>
                  <PostBox>
                    <Box>
                      <img src={calendar} alt="" />
                      <PersonText class="date">10 марта 2020 г.</PersonText>
                    </Box>

                    <PostText class="news__text">
                      Как уже неоднократно упомянуто, элементы политического
                      процесса представляют собой не что иное, как квинтэссенцию
                      победы маркетинга над разумом и должны быть своевременно
                      верифицированы.
                    </PostText>
                  </PostBox>
                </PostLink>
              </NewsItem>
              <NewsItem class="news-cl-i col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <PostLink href="#">
                  <PostImage src={post4} alt="image-printing" />

                  <PostTitle class="news__title">
                    Сплочённость команды профессионалов продолжает удивлять
                  </PostTitle>
                  <PostBox>
                    <Box>
                      <img src={calendar} alt="" />
                      <PersonText class="date">10 марта 2020 г.</PersonText>
                    </Box>

                    <PostText class="news__text">
                      Повседневная практика показывает, что начало повседневной
                      работы по формированию позиции говорит о возможностях
                      соответствующих условий активизации.
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
