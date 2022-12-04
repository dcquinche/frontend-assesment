import { Link } from 'react-router-dom';
import './styles.css';

const menu = () => (
  <nav className="menu">
    <Link className="menu__link" to="/">Home</Link>
    <Link className="menu__link" to="/about">About</Link>
  </nav>
);

export default menu;
