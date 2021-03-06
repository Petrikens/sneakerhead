import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteElementCart } from '../../store/productCardSlice';
import './ShoppingCart.css'

export default function ShoppingCart() {


   const navigate = useNavigate();

   const products = useSelector(state => state.productCard.productData);
   const dispatch = useDispatch();



   return (
      <div className='sohpingCartContainer'>
         {products.length
            ?
            <div className='chosenProducts'>
               {products.map(el => {
                  return (<div className='chosenProduct' key={el.id}>
                     <div className='cartImg'>
                        <img alt='cartImg' src={el.url} />
                     </div>
                     <div className='cartText'>
                        <div className='cartName'>Название: {el.name}</div>
                        <div className='cartBrand'>Бренд: {el.brand}</div>
                        <div className='cartCount'>Количество: {el.count}</div>
                        <div className='cartSize'>Размер: {el.size}</div>
                        <div className='cartPrice'>Цена: {el.price * el.count}</div>
                     </div>
                     <div className='cartButtons'>
                        <input type="button" className='deleteButton' name='deleteButton' defaultValue='Удалить'
                           onClick={() => dispatch(deleteElementCart({ id: el.id }))}
                        />
                     </div>
                  </div>)
               })}
               <input type="button" className='buyButton' name='buyButton' defaultValue='Оформить заказ'
                  onClick={() => {
                     dispatch(deleteElementCart({ id: null })) && navigate("../purchase", { replace: true })
                  }}
               />
            </div>
            :
            <h1>В корзине нет товаров</h1>}
      </div>
   )
}
