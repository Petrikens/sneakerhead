import './ProductCard.css';
const ProductCard = ({ data }) => {




   return (
      <ul className="product" >
         <li>
            <div className="products_img">
               <img alt='shoes' src={data.url} />
            </div>
            <div className="products_text">
               <span>{data.name}</span>
               <span>{data.brand}</span>
               <span>{data.price}</span>
            </div>
         </li>
      </ul>
   )
}
export default ProductCard; 