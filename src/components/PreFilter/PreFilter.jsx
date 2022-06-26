import React from "react";
import { clientEmmiter } from './events';
import './PreFilter.css';
const PreFilter = ({ data }) => {

   const sortChange = (element) => {
      if (element.target.value === 'popular') {
         return clientEmmiter.emit('ESortChanged', data);
      } else if (element.target.value === 'highPrice') {
         let sortData = data.sort();
         return clientEmmiter.emit('ESortChanged', sortData);
      } else if (element.target.value === 'lowPrice') {
         let sortData = data.price.sort();
         return clientEmmiter.emit('ESortChanged', sortData);
      };
   }

   return (
      <div className='PreFilter'>
         <span className='PreFilterText'>Сортировать по:</span>
         <select name='sort' onChange={sortChange}>
            <option value='popular' selected>По популярности</option>
            <option value='highPrice'>Цена по возрастанию</option>
            <option value='lowPrice'>Цена по убыванию</option>
         </select>
      </div>

   )
}
export default PreFilter;