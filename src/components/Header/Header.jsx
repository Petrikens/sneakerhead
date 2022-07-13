import { NavLink, Link, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getNameQuery } from '../../store/dataFiltersSlice'
import './Header.css';
import ProductCart from '../ProductCart';
import LOGO from '../../LOGO.png'
import FallbackAvatars from '../FallbackAvatars';


const Header = () => {

   let [searchParams, setSearchParams] = useSearchParams();

   const dispatch = useDispatch();

   const setActive = ({ isActive }) => isActive ? 'active-link' : '';

   const nameQuery = searchParams.get('name') || '';

   dispatch(getNameQuery({ name: nameQuery }));

   function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const query = form.search.value;
      setSearchParams({ name: query });
   }

   return (<div className="header">
      <div className="container">
         <ul>
            <Link to="/">
               <li><img alt='logo' src={LOGO} /></li>
               <li>СНИКЕРХЭД</li>
            </Link>
         </ul>
         <ul>
            <li><NavLink to="new" className={setActive}> Новинки </NavLink></li>
            <li><NavLink to="sale" className={setActive}> Распродажа </NavLink></li>
            <li><NavLink to="male" className={setActive}> Мужская </NavLink></li>
            <li><NavLink to="female" className={setActive}> Женская </NavLink></li>
         </ul>
         <ul>
            <li>
               <form autoComplete="off" onSubmit={handleSubmit}>
                  <input type="search" name="search" placeholder='Поиск' />
               </form>
            </li>
            <li>
               {
                  <Link to='client'>
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