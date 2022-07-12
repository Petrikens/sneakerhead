import React from "react";
import { useSelector } from 'react-redux';
import Products from "../../components/Products";


const MainPage = () => {


   const data = useSelector(state => state.dataFilters.data);


   return <Products dataProp={data} />
}

export default React.memo(MainPage);