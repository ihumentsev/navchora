import { useMediaQuery } from 'react-responsive';

const useIsDesk = () => useMediaQuery({ minWidth: 1216 });
const useIsTablet = () => useMediaQuery({ minWidth: 1000 });
const useIsMobile = () => useMediaQuery({ maxWidth: 480 });

export { useIsDesk, useIsTablet, useIsMobile };
