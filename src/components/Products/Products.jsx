import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import BasicSelect from "../BasicSelect";
import BasicBreadcrumbs from "../BasicBreadcrumbs";
import Filters from "../Filters";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/dataFiltersSlice';
import { Link } from 'react-router-dom'
import './Products.css';

const Products = ({ dataProp }) => {
   const { status, error } = useSelector(state => state.dataFilters);
   const searchName = useSelector(state => state.dataFilters.brandQuery);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchData())
   }, [dispatch])



   return (
      <div>
         <div className="preFilter">
            <div className="container">
               <div className='breadcrumbs'>
                  <BasicBreadcrumbs />
               </div>
               <div className='sortSelect'>
                  <BasicSelect />
               </div>
            </div>
         </div>
         <div className="catalog">
            <div className="container">
               <Filters />
               {status === 'loading' && <h2>Loading...</h2>}
               {error && <h2>ERROR:{'Ошибка связи!'}</h2>}
               <div className="products">
                  {dataProp.filter(el => el.name.toLowerCase().includes(searchName.toLowerCase())).map((product) => {
                     return (
                        <Link key={product.id} to={(product.condition) ? `/${product.condition}/${product.name}` : `/${product.gender}/${product.name}`}>
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

export default React.memo(Products);