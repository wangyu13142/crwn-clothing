import Button from "../button/button.component";
import './product-card.styles.scss'
const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    return (
        <div className="product-card-item">
            <img src={imageUrl} alt={`${name}`} />
            <div className="product-info">
                <span>{name}</span>
                <span>${price}</span>
            </div>
            <Button btnType='inverted'>Add to Chart</Button>
        </div>
    )
}
export default ProductCard;