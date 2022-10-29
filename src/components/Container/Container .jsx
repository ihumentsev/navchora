// import css from '../Container/Container.module.css';
// import '../Container/Container.scss';
import { ContainerBox } from './Container.styled';

export default function Container({ children }) {
  return <ContainerBox className="container">{children}</ContainerBox>;
}
