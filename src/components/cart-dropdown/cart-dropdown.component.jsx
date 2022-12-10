// 通过使用钩子来进行路由跳转 useNavigate是一个函数
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// 样式
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context';


const CartDropdown = () => {
    // 从全局上下文获取到购物车的所有商品
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckOutHandler = ()=>{
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => {
                    return (
                        <CartItem cartItem={item} key={item.id}></CartItem>
                    )
                })}
            </div>
            <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;