import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './product-card.styles.scss'
const ProductCard = ({ product }) => {
    const {addItemToCart} =useContext(CartContext);
    const { name, imageUrl, price } = product;
    const addProductToCart = ()=> addItemToCart(product);
    return (
        <div className="product-card-item">
            <img src={imageUrl} alt={`${name}`} />
            <div className="product-info">
                <span>{name}</span>
                <span>${price}</span>
            </div>
            <Button btnType='inverted' onClick={addProductToCart}>Add to Chart</Button>
        </div>
    )
}
export default ProductCard;