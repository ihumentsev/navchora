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
import foto1 from '../../img/reviews/reviews-lioncom.jpg';
import foto2 from '../../img/reviews/reviews3.jpg';
import star from '../../img/icons/star.svg';
import calendar from '../../img/icons/calendar.svg';
import { useIsDesk } from 'Hooks/Hooks';

export default function Reviews() {
  const isDeskScreen = useIsDesk();
  return (
    <ReviewsSection className="reviews-wrap">
      <Container className="container">
        <ReviewsTitle className="title">Відгуки клієнтів</ReviewsTitle>
        <LinkAbout href="#!" className="link">
          <IconLink src={tag} alt="" />
          Читати всі відгуки
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
                src={foto2}
                alt="persone-foto"
              />
              <WraperPerson className="persone__info">
                <PersonTitle className="persone__name">
                  Антон Шершньов
                </PersonTitle>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText className="date">18 вересня 2020 р.</PersonText>
                </Box>
              </WraperPerson>

              <ReviewsText className="review__text">
                Очень рекомендую Друкарня НА ВЧОРА, как супер надёжного партнёра
                в решении самых горящих и важных задач связанных с полиграфией.
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
                  Serg Pavolotsky
                </PersonTitle>
                <Box>
                  <img src={calendar} alt="" />
                  <PersonText className="date">05 грудня 2021 р.</PersonText>
                </Box>
              </WraperPerson>

              <ReviewsText className="review__text">
                Чудова Друкарня! Все зробили вчасно й без зауважень. Працюємо з
                вами й надалі👌🏻
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
                  src={foto1}
                  alt="persone-foto"
                />
                <WraperPerson className="persone__info">
                  <PersonTitle className="persone__name">
                    Анастасия Чередниченко
                  </PersonTitle>
                  <Box>
                    <img src={calendar} alt="" />
                    <PersonText className="date">
                      23 листопада 2020 р.
                    </PersonText>
                  </Box>
                </WraperPerson>

                <ReviewsText className="review__text">
                  Бесконечно ценю LargeFormat за качество, оперативность и
                  открытость в работе. Всегда идут навстречу, выполняют заказы
                  вовремя и ответственно подходят к делу, которое делают.
                  Невероятно уважаем такой труд в Lioncom - wow-events agency 🙌
                  Спасибо, что на вас можно положиться!
                </ReviewsText>
              </WraperReviews>
            </ItemReviews>
          )}
        </ListReviews>
      </Container>
    </ReviewsSection>
  );
}
