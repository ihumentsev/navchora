import Container from 'components/Container/Container ';
import {
  Box,
  IconReviews,
  ImageReviews,
  ItemReviews,
  ListReviews,
  PersonText,
  PersonTitle,
  ReviewsSection,
  ReviewsText,
  ReviewsTitle,
  WraperPerson,
  WraperRating,
  WraperReviews,
} from './Reviews.styled';
import tag from '../../img/icons/iconLink.svg';
import { IconLink, LinkAbout } from 'components/About/About.styled';
import foto from '../../img/reviews/reviews__1.png';
import star from '../../img/icons/star.svg';
import calendar from '../../img/icons/calendar.svg';

export default function Reviews() {
  return (
    <ReviewsSection class="reviews-wrap">
      <Container class="container">
        <ReviewsTitle class="title">Отзывы клиентов</ReviewsTitle>
        <LinkAbout href="#!" class="link">
          <IconLink src={tag} alt="" />
          Читать все отзывы
        </LinkAbout>

        <ListReviews class="row">
          <ItemReviews class="rvw-i col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
            <WraperRating class="rating">
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
            </WraperRating>
            <WraperReviews class="review">
              <ImageReviews
                class="persone__photo"
                src={foto}
                alt="persone-foto"
              />
              <WraperPerson class="persone__info">
                <PersonTitle class="persone__name">
                  Степаненко Владимир
                </PersonTitle>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText class="date">10 марта 2020 г.</PersonText>
                </Box>
              </WraperPerson>

              <ReviewsText class="review__text">
                Прежде всего, социально-экономическое развитие позволяет оценить
                значение системы обучения кадров, соответствующей насущным
                потребностям.
              </ReviewsText>
            </WraperReviews>
          </ItemReviews>
          <ItemReviews class="rvw-i col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
            <WraperRating class="rating">
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
            </WraperRating>
            <WraperReviews class="review">
              <ImageReviews
                class="persone__photo"
                src={foto}
                alt="persone-foto"
              />
              <WraperPerson class="persone__info">
                <PersonTitle class="persone__name">
                  Степаненко Владимир
                </PersonTitle>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText class="date">10 марта 2020 г.</PersonText>
                </Box>
              </WraperPerson>

              <ReviewsText class="review__text">
                Прежде всего, социально-экономическое развитие позволяет оценить
                значение системы обучения кадров, соответствующей насущным
                потребностям.
              </ReviewsText>
            </WraperReviews>
          </ItemReviews>
          <ItemReviews class="rvw-i col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
            <WraperRating class="rating">
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
            </WraperRating>
            <WraperReviews class="review">
              <ImageReviews
                class="persone__photo"
                src={foto}
                alt="persone-foto"
              />
              <WraperPerson class="persone__info">
                <PersonTitle class="persone__name">
                  Степаненко Владимир
                </PersonTitle>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText class="date">10 марта 2020 г.</PersonText>
                </Box>
              </WraperPerson>

              <ReviewsText class="review__text">
                Прежде всего, социально-экономическое развитие позволяет оценить
                значение системы обучения кадров, соответствующей насущным
                потребностям.
              </ReviewsText>
            </WraperReviews>
          </ItemReviews>
        </ListReviews>
      </Container>
    </ReviewsSection>
  );
}
