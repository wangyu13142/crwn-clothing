import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
    // 从全局上下文获取到购物车的所有商品
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => {
                    return (
                        <CartItem cartItem={item} key={item.id}></CartItem>
                    )
                })}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;