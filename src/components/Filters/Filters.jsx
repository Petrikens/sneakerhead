import React, { useCallback } from "react";
import RangeSlider from '../RangeSlider';
import RadioButtonsGroup from '../RadioButtonsGroup';
import CONSTANTS from '../constants.js';
import './Filters.css';
import { useDispatch } from 'react-redux';
import { dataFilters, sizeFilter, rebootSort } from '../../store/dataFiltersSlice'



const Filters = () => {

   const dispatch = useDispatch();

   const sizeClick = useCallback(({ target }) => {
      const { innerHTML } = target;
      if (target.className !== 'active') {
         target.className = 'active';
         dispatch(sizeFilter({ innerHTML, isActive: 'active' }));
      } else {
         target.className = 'normal';
         dispatch(sizeFilter({ innerHTML, isActive: 'normal' }))
      }
   }, [dispatch])

   function searchButton() {
      dispatch(dataFilters({ condition: true }))
   }

   function isChecked() {
      dispatch(rebootSort({ condition: true }))
   }


   return (
      <div className="filter">
         <div className="filter_brand filter_inner">
            <div className="filter_title">
               <p>Бренд</p>
            </div>
            <div id="wrapper">
               <RadioButtonsGroup />
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
         <input type='button' value='Сбросить' className="searchButton" onClick={isChecked} />
         <input type='button' value='Поиск' className="searchButton" onClick={searchButton} />
      </div >

   )
}

export default React.memo(Filters);