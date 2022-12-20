import "./category-preview.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import { Link } from "react-router-dom";

const ShopPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title.toLowerCase()}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};
export default ShopPreview;
