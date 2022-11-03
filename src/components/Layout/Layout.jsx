import FooterFirst from 'components/FooterFirst/FooterFirst';
import FooterSecond from 'components/FooterSecond/FooterSecond';
import Header from 'components/Header/Header';
import HeaderPage from 'components/HeaderPage/HeaderPage';
import { useIsDesk } from 'Hooks/Hooks';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const isDeskScreen = useIsDesk();
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? <Header /> : <HeaderPage />}

      <Outlet />
      {isDeskScreen && <FooterFirst />}
      <FooterSecond />
    </>
  );
}
