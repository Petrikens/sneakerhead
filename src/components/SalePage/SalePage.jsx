import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import Filters from "../Filters";
import CONSTANTS from '../constants.js';
import { useSelector, useDispatch } from 'react-redux';
import { sortChange, fetchData } from '../../store/dataFiltersSlice';
import { Link } from 'react-router-dom'

import '../MainPage/MainPage.css';

const SalePage = () => {


   const data = useSelector(state => state.dataFilters.data);
   const sort = useSelector(state => state.dataFilters.sort);
   const { status, error } = useSelector(state => state.dataFilters);

   const salePageData = data.filter(el => el.condition === 'sale');

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchData())
   }, [dispatch])

   const sortData = ({ target }) => dispatch(sortChange({ target }));



   return (
      <div>
         <div className="container">
            <div className='PreFilter'>
               <span className='PreFilterText'>Сортировать по:</span>
               <select name='sort' value={sort} onChange={sortData} >
                  {Object.entries(CONSTANTS.SORT).map(el => {
                     const elementData = el[1];
                     return (
                        <option
                           key={elementData.value}
                           value={elementData.value}>
                           {elementData.text}
                        </option>)
                  })}
               </select>
            </div>
         </div>
         <div className="catalog">
            <div className="container">
               <Filters />
               {status === 'loading' && <h2>Loading...</h2>}
               {error && <h2>ERROR:{error}</h2>}
               <div className="products">
                  {salePageData.map((product) => {
                     return (
                        <Link key={product.id} to={`/${product.id}`}>
                           <ProductCard data={product} />
                        </Link>

                     )
                  })}
               </div>
            </div>
         </div>
      </div >

   )
}

export default React.memo(SalePage);