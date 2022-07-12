import React from "react";
import { useSelector } from 'react-redux';
import Products from "../../components/Products";


const NewPage = () => {
   const data = useSelector(state => state.dataFilters.data);

   const newPageData = data.filter(el => el.condition === 'new');

   return <Products dataProp={newPageData} />
}

export default React.memo(NewPage);