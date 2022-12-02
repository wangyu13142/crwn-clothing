import { useContext, Fragment } from "react";
import ShopPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

// 商品页面
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <ShopPreview
            key={title}
            title={title}
            products={products}
          ></ShopPreview>
        );
      })}
    </Fragment>
  );
};
export default CategoriesPreview;