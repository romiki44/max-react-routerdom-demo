import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  //<a href='/welcome'>Welcome</a> posle realny request a tym padom refreshne stranku
  //<Link to='/welcome'>Welcome</Link> to nerobi, automaticky zavola preventDefault(), preto je lepsi
  //<NavLink></NavLink> je este lepsi, pretoze automaticky vysvieti aktivny link
  //treba nastavit activeClassName
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to='/welcome' activeClassName={classes.active}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
