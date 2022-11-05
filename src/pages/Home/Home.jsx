import fast from '../../img/icons/icon-fast.svg';
import delivery from '../../img/icons/icon-delivery.svg';
import price from '../../img/icons/icon-price.svg';
import prod from '../../img/icons/icon-prod.svg';
import {
  AdvantagWraperDiv,
  Image,
  Item,
  List,
  MainBox,
  Text,
} from './Home.styled';
import Container from 'components/Container/Container ';
import Categories from 'components/Categories/Categories';
import DesignSection from 'components/DesignSection/DesignSection';
import About from 'components/About/About';
import Reviews from 'components/Reviews/Reviews';
import News from 'components/News/News';
import FidbackForm from 'components/FidbackForm/FidbackForm';

export default function Home() {
  return (
    <MainBox className="home_section">
      <Container>
        <AdvantagWraperDiv className="advantag_wraper">
          <List className="advantag_list">
            <Item className="advantag_item">
              <Image src={prod} width="58" />
              <Text className="advantag_text">Власне виробництво</Text>
            </Item>
            <Item className="advantag_item">
              <Image src={price} width="58" />
              <Text className="advantag_text">Приємні ціни</Text>
            </Item>
            <Item className="advantag_item">
              <Image src={fast} width="58" />
              <Text className="advantag_text">Швидке виготовлення</Text>
            </Item>
            <Item className="advantag_item">
              <Image src={delivery} width="74" />
              <Text className="advantag_text">Доставка по Україні</Text>
            </Item>
          </List>
        </AdvantagWraperDiv>
        <Categories />
      </Container>
      <DesignSection />
      <About />
      <Reviews />
      <News />
      <FidbackForm />
    </MainBox>
  );
}
