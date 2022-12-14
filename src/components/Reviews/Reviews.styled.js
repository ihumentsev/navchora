import styled from 'styled-components';

const ReviewsSection = styled.section`
  padding-bottom: 80px;
  @media screen and (min-width: 1000px) {
    padding-bottom: 140px;
  }
  @media screen and (min-width: 1216px) {
    padding-bottom: 160px;
  }
`;
const ReviewsTitle = styled.h2`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 37px;
  margin-bottom: 10px;
`;
const ListReviews = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 15px;
  justify-content: space-between;
  list-style: none;
  margin-top: 95px;
  padding: 0;
`;
const ItemReviews = styled.li`
  width: 100%;
  @media screen and (min-width: 1000px) {
    width: 470px;
  }
  @media screen and (min-width: 1216px) {
    width: 392px;
  }
`;
const WraperRating = styled.div`
  margin-left: 103px;
`;
const IconReviews = styled.img`
  margin-right: 10px;
`;
const WraperReviews = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  position: relative;
  @media screen and (min-width: 1000px) {
    width: 470px;
  }
  @media screen and (min-width: 1216px) {
    width: 392px;
  }
`;
const ImageReviews = styled.img`
  position: absolute;
  top: -50px;
  border-radius: 50px;
  width: 80px;
`;
const WraperPerson = styled.div`
  margin-left: 105px;
`;
const PersonTitle = styled.h3`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
`;
const PersonText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #b4b4b4;
  margin-left: 5px;
  margin-top: 0;
  margin-bottom: 0;
`;
const Box = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const ReviewsText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  margin-left: 20px;
  margin-right: 24px;
`;
export {
  ReviewsSection,
  ReviewsTitle,
  ListReviews,
  ItemReviews,
  WraperRating,
  IconReviews,
  WraperReviews,
  ImageReviews,
  WraperPerson,
  PersonTitle,
  PersonText,
  Box,
  ReviewsText,
};
