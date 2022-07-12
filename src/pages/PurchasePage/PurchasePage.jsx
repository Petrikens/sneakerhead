import React from "react";
import { Link } from 'react-router-dom';
import './PurchasePage.css';

export default function PurchasePage() {


   return (
      <div className="PurchasePageContainer">
         <h1>Спасибо за покупку! </h1>
         <p>Для просмотра ассортимента пройдите на <Link className="clientLink" to="/">Главную</Link> страницу!</p>
      </div>
   )
}