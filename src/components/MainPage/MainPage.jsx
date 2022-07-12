import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import BasicSelect from "../BasicSelect"
import Filters from "../Filters";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/dataFiltersSlice';
import { Link } from 'react-router-dom'

import './MainPage.css';

const MainPage = () => {


   const data = useSelector(state => state.dataFilters.data);

   const { status, error } = useSelector(state => state.dataFilters);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchData())
   }, [dispatch])



   return (
      <div>
         <div className="container">
            <div className='PreFilter'>
               <BasicSelect />
            </div>
         </div>
         <div className="catalog">
            <div className="container">
               <Filters />
               {status === 'loading' && <h2>Loading...</h2>}
               {error && <h2>ERROR:{'Ошибка связи!'}</h2>}
               <div className="products">
                  {data.map((product) => {
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

export default React.memo(MainPage);