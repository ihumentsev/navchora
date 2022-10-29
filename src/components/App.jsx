import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<div>News</div>} />
          <Route path="/delivery" element={<div>Оплата и доставка</div>} />
          <Route path="/partnership" element={<div>Платформа для РА</div>} />
          <Route path="/promotion" element={<div>Акции</div>} />
          <Route path="/help" element={<div>Помощь</div>} />
          <Route path="/contacts" element={<div>Контакты</div>} />
        </Route>
      </Routes>
    </>
  );
};
