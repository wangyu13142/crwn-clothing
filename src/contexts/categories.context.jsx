import { useState, useEffect } from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop.data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});
// 提供者组件
export const CategoriesProvider = ({ children }) => {
  // 定义初始化的商品数据 用于给ProductsContext 进行传值
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  // 为什么需要解构 是因为需要对象吗？
  const value = { categoriesMap };
  return (
    // 给ProductsContext 进行了传值
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
