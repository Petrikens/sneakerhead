import './Footer.css';
const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="border">
               <ul>
                  <li>Ближайшие магазины</li>
                  <li>Подписаться на рассылку</li>
                  <li>Зарегестрироваться</li>
                  <li>Оставить отзыв</li>
               </ul>
               <ul>
                  <li>Помощь</li>
                  <li>Статус заказа</li>
                  <li>Доставка</li>
                  <li>Возврат</li>
                  <li>Способы оплаты</li>
                  <li>Связаться с нами</li>
               </ul>
               <ul>
                  <li>О сникерхэд</li>
                  <li>Новости</li>
                  <li>Карьера</li>
                  <li>Инвесторам</li>
               </ul>
               <ul>
                  <li><i className="fab fa-vk"></i></li>
                  <li><i className="fab fa-telegram-plane"></i></li>
                  <li><i className="fab fa-twitter"></i></li>
                  <li><i className="fab fa-instagram"></i></li>
               </ul>
            </div>
            <ul className="up-inf">
               <li>Каталог</li>
               <li>Условия использования</li>
               <li>Условия продажи</li>
               <li>Информация о магазине</li>
            </ul>
            <ul className="low-inf">
               <li>Минск</li>
               <li>© 2021 Магазин Сникерхэд</li>
               <li>Конфиденциальность и файлы cookie</li>
            </ul>
         </div>
      </div>
   )
}
export default Footer;