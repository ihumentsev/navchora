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
import { useIsDesk } from 'Hooks/Hooks';

export default function Reviews() {
  const isDeskScreen = useIsDesk();
  return (
    <ReviewsSection className="reviews-wrap">
      <Container className="container">
        <ReviewsTitle className="title">Отзывы клиентов</ReviewsTitle>
        <LinkAbout href="#!" className="link">
          <IconLink src={tag} alt="" />
          Читать все отзывы
        </LinkAbout>

        <ListReviews className="row">
          <ItemReviews className="rvw-i col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
            <WraperRating className="rating">
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
            </WraperRating>
            <WraperReviews className="review">
              <ImageReviews
                className="persone__photo"
                src={foto}
                alt="persone-foto"
              />
              <WraperPerson className="persone__info">
                <PersonTitle className="persone__name">
                  Степаненко Владимир
                </PersonTitle>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText className="date">10 марта 2020 г.</PersonText>
                </Box>
              </WraperPerson>

              <ReviewsText className="review__text">
                Прежде всего, социально-экономическое развитие позволяет оценить
                значение системы обучения кадров, соответствующей насущным
                потребностям.
              </ReviewsText>
            </WraperReviews>
          </ItemReviews>
          <ItemReviews className="rvw-i col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
            <WraperRating className="rating">
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
              <IconReviews src={star} alt="" />
            </WraperRating>
            <WraperReviews className="review">
              <ImageReviews
                className="persone__photo"
                src={foto}
                alt="persone-foto"
              />
              <WraperPerson className="persone__info">
                <PersonTitle className="persone__name">
                  Степаненко Владимир
                </PersonTitle>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText className="date">10 марта 2020 г.</PersonText>
                </Box>
              </WraperPerson>

              <ReviewsText className="review__text">
                Прежде всего, социально-экономическое развитие позволяет оценить
                значение системы обучения кадров, соответствующей насущным
                потребностям.
              </ReviewsText>
            </WraperReviews>
          </ItemReviews>
          {isDeskScreen && (
            <ItemReviews className="rvw-i col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <WraperRating className="rating">
                <IconReviews src={star} alt="" />
                <IconReviews src={star} alt="" />
                <IconReviews src={star} alt="" />
                <IconReviews src={star} alt="" />
                <IconReviews src={star} alt="" />
              </WraperRating>
              <WraperReviews className="review">
                <ImageReviews
                  className="persone__photo"
                  src={foto}
                  alt="persone-foto"
                />
                <WraperPerson className="persone__info">
                  <PersonTitle className="persone__name">
                    Степаненко Владимир
                  </PersonTitle>
                  <Box>
                    <img src={calendar} alt="" />
                    <PersonText className="date">10 марта 2020 г.</PersonText>
                  </Box>
                </WraperPerson>

                <ReviewsText className="review__text">
                  Прежде всего, социально-экономическое развитие позволяет
                  оценить значение системы обучения кадров, соответствующей
                  насущным потребностям.
                </ReviewsText>
              </WraperReviews>
            </ItemReviews>
          )}
        </ListReviews>
      </Container>
    </ReviewsSection>
  );
}
