import React from "react";
import { useSelector } from 'react-redux';
import Products from "../../components/Products";


const ForMenPage = () => {


   const data = useSelector(state => state.dataFilters.data);
   const MenPageData = data.filter(el => el.gender === 'male');


   return <Products dataProp={MenPageData} />
}

export default React.memo(ForMenPage);