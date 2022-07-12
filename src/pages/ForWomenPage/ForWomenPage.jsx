import React from "react";
import { useSelector } from 'react-redux';
import Products from "../../components/Products";


const ForWomenPage = () => {
   const data = useSelector(state => state.dataFilters.data);

   const womenPageData = data.filter(el => el.gender === 'female');

   return <Products dataProp={womenPageData} />
}

export default React.memo(ForWomenPage);