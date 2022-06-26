import { Link } from 'react-router-dom'
import './Header.css';
import ProductCart from '../ProductCart';
import useAuth from '../../hooks/use-auth'
import LOGO from '../../LOGO.png'
import FallbackAvatars from '../FallbackAvatars';


const Header = () => {

   const { isAuth } = useAuth();

   return (<div className="header">
      <div className="container">
         <ul>
            <Link to="/">
               <li><img alt='logo' src={LOGO} /></li>
               <li>СНИКЕРХЭД</li>
            </Link>
         </ul>
         <ul>
            <li><Link to="new"> Новинки </Link></li>
            <li><Link to="sale"> Распродажа </Link></li>
            <li><Link to="men"> Мужская </Link></li>
            <li><Link to="women"> Женская </Link></li>
         </ul>
         <ul>
            <li>
               {
                  isAuth
                     ?
                     <Link to='client'>
                        <FallbackAvatars />
                     </Link>
                     :
                     <Link to='registration'>
                        <FallbackAvatars />
                     </Link>
               }
            </li>
            <li>
               <Link to="cart">
                  <ProductCart />
               </Link>
            </li>
         </ul>
      </div>
   </div>)
}

export default Header;