import { useState } from "react";
import { createContext } from "react";

import SHOP_DATA from "../shop.data";

export const ProductsContext = createContext({
    products: []
})
// 提供者组件
export const ProductsProvider = ({ children }) => {
    // 定义初始化的商品数据 用于给ProductsContext 进行传值
    const [products, setProducts] = useState(SHOP_DATA.hats.items);
    // 为什么需要解构 是因为需要对象吗？
    const value = {products};
    return (
        // 给ProductsContext 进行了传值
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}