import { Route,Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories.component.component";
import Category from "../category/category.component";
// 商品页面
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      {/* 动态匹配参数 */}
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
};
export default Shop;
