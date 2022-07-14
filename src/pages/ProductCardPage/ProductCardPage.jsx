import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData, increaseProductCart } from '../../store/productCardSlice';
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import './ProductCardPage.css'

export default function ProductCardPage() {

   const { name } = useParams();
   const [productData, setProductData] = useState();
   const [count, setCount] = useState(1);
   const [chosenSize, setChosenSize] = useState(null);

   const dispatch = useDispatch();
   const productCartData = useSelector(state => state.productCard.productData);

   const navigate = useNavigate();

   useEffect(() => {
      fetch(`https://my-json-server.typicode.com/Petrikens/json-server/data?name=${name}`)
         .then(response => response.json())
         .then(json => {
            setProductData(json.pop());
         })
         .catch((error) => {
            const errorMessage = error.message;
            navigate("../", { replace: true });
            alert(errorMessage)
         });
   }, [name, navigate])




   const changeCount = ({ target }) => {
      if (target.value === '+' && count < 10) {
         setCount(count + 1)
      } else if (target.value === '-' && count > 1) {
         setCount(count - 1)
      }
   }

   const addProduct = () => {
      const isProductChosen = productCartData.some(el => el.id === productData.id);
      if (chosenSize && !isProductChosen) {
         dispatch(getProductData({
            data: {
               id: productData.id,
               name: productData.name,
               brand: productData.brand,
               price: productData.price,
               url: productData.url,
               size: chosenSize,
               count: count,
            }
         }));
         dispatch(increaseProductCart())
      }
   }

   const chooseSize = ({ target }) => {
      const { innerHTML } = target;
      setChosenSize(innerHTML);
   }

   return (
      (productData &&
         (
            <div className='productCardContainer'>
               <div className='breadcrumbs'>
                  <BasicBreadcrumbs />
               </div>
               <div className='singleCart'>
                  <div className='productImg'>
                     <img alt='shoesImg' src={productData?.url} />
                  </div>
                  <div className='productText'>
                     <div className='productName'>
                        {productData?.name}
                     </div>
                     <div className='productBrand'>
                        {productData?.brand}
                     </div>
                     <div className='productPrice'>
                        {productData?.price}
                     </div>
                     <div className='productSizes'>
                        {productData?.sizes.map((size) => {
                           return <div key={size} className={chosenSize === size ? 'active' : 'normal'} onClick={chooseSize}>{size}</div>
                        })}
                     </div>
                     <div className='productCount'>
                        <input type='button' value='-' className='decrementButton' onClick={changeCount} />
                        <span>{count}</span>
                        <input type='button' value='+' onClick={changeCount} />
                     </div>
                     <input className='addProductBtn' type='button' value='Добавить в корзину' onClick={addProduct} />
                  </div>
               </div>
            </div>
         )
      )
   )
}
