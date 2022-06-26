import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../store/userLoginSlice';
import './ClientPage.css';

export default function ClientPage() {

   const userName = useSelector(state => state.userLogin.email);
   const dispatch = useDispatch();

   return (
      <div className="clientPageContainer">
         <p>{userName} Добро пожаловать на СНИКЕРХЭД!</p>
         <p>Для просмотра ассортимента пройдите на <Link className="clientLink" to="/">Главную</Link> страницу!</p>
         <button
            onClick={() => dispatch(removeUser())}
         ><Link to="/">Выйти из аккаунта {userName}</Link></button>
      </div>
   )
}