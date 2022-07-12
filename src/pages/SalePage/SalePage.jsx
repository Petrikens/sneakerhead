import React from "react";
import { useSelector } from 'react-redux';
import Products from "../../components/Products";


const SalePage = () => {
   const data = useSelector(state => state.dataFilters.data);

   const salePageData = data.filter(el => el.condition === 'sale');

   return <Products dataProp={salePageData} />
}

export default React.memo(SalePage);