import "./category.styles.scss";
import { useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
// 获取路由参数
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  // 解构路由参数
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-box-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </>
  );
};
export default Category;
