import styled from 'styled-components';
const NewsSection = styled.section`
  padding-bottom: 160px;
`;
const NewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;
const NewsItem = styled.li`
  width: 289px;
  border: 1px solid #e8e8e8;
  border-radius: 0px 0px 4px 4px;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
const PostImage = styled.img`
  width: 289px;
  height: 140px;
  object-fit: cover;
`;
const PostLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #2e2e2e;
`;
const PostTitle = styled.h3`
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 20px;
`;
const PostBox = styled.div`
  margin: 20px;
`;
const PostText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
`;
export {
  NewsSection,
  NewsList,
  NewsItem,
  PostTitle,
  PostText,
  PostBox,
  PostLink,
  PostImage,
};
