import { useState, useEffect } from "react";
import { createContext } from "react";
// 需要判断要添加的商品productToAdd  是否在当前购物车中出现cartItems 决定相应产品的数量
const addCartItem = (cartItems, productToAdd) => {
    //判断当前加入的产品是否在购物车里面出现 并返回这个商品
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    // 当前购物车有该商品 在对应商品数量上加一并返回 新的购物车数组
    if (existingCartItem) {
        //map是会返回新的数组 购物车的每一项都是商品 只不过加了一个数量
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    // 没有该商品直接返回商品数量为一
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],//购物车已经有的商品
    setCartItems: () => { },
    addItemToCart: () => { },//添加新商品到购物车
    cartCount: 0,
});
export const CartContextProvider = ({ children }) => {
    // 这里面定义的属性和方法都需要映射到CartContext对应
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    // 根据cartItems的变化动态计算购物车的商品总数
    useEffect(() => {
        // reduce 参数一:递归函数 参数二:初始值 
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, setCartItems,cartCount };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
