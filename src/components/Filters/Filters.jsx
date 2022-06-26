import React, { useCallback } from "react";
import RangeSlider from '../RangeSlider';
import CONSTANTS from '../constants.js';
import './Filters.css';
import { useDispatch } from 'react-redux';
import { brandFilter, dataFilters, sizeFilter } from '../../store/dataFiltersSlice'



const Filters = () => {

   const dispatch = useDispatch();

   const sizeClick = useCallback(({ target }) => {
      const { innerHTML } = target;
      if (target.className !== 'active') {
         target.className = 'active';
         dispatch(sizeFilter({ innerHTML, isActive: 'active' }))
      } else {
         target.className = 'normal';
         dispatch(sizeFilter({ innerHTML, isActive: 'normal' }))
      }
   }, [dispatch])


   function brandClick({ target }) {
      const { id } = target;
      if (target.checked) {
         dispatch(brandFilter({ id }))
      }
   }

   function searchButton() {
      dispatch(dataFilters({ condition: true }))
   }


   return (
      <div className="filter">
         <div className="filter_brand filter_inner">
            <div className="filter_title">
               <p>Бренд</p>
               <i className="fas fa-chevron-up" id="up"></i>
               <i className="fas fa-chevron-down" id="down"></i>
            </div>
            <div id="wrapper">
               {Object.entries(CONSTANTS.BRANDS).map(el => {
                  const elementData = el[1];
                  return (
                     <label key={elementData.value}>
                        <input type="radio" name='brand' id={elementData.value} onChange={brandClick} />
                        {elementData.text}
                        <br />
                     </label>)
               })}
            </div>
         </div>
         <div className="filter_price filter_inner">
            <div className="filter_title">
               <p>Поиск по цене</p>
            </div>
            <RangeSlider />
         </div>
         <div className="filter_size filter_inner">
            <div className="filter_title">
               <p>Размер</p>
            </div>
            <div id="wrapper-size">
               <ul >
                  {CONSTANTS.SIZES.map((el) => {
                     return <li key={el} onClick={sizeClick}>{el}</li>
                  })}
               </ul>
            </div>
         </div>
         <input type='button' value='Поиск' className="searchButton" onClick={searchButton} />
      </div >

   )
}

export default React.memo(Filters);