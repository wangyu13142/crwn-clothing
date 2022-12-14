// 相当于占位符，往往用于组件返回的根节点，实际上什么也不显示
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context"
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// 将svg图片 变成组件 叫 CrwnLogo
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// 导入样式
import './navigation.styles.scss'
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
    // 用户退出登录
    const signOutHandler = async () => {
        await signOutUser();
    }
    return (
        <Fragment>
            {/* 导航栏部分 */}
            <div className="nav-container">
                {/* 相当于a标签用于跳转路由 */}
                <Link to='/' className="logo-container">
                    {/* Logo */}
                    <CrwnLogo className="nav-logo"></CrwnLogo>
                </Link>
                <div className="nav-link-container">
                    <Link to='/shop' className="nav-menu-list">
                        SHOP
                    </Link>
                    {currentUser ? (<span onClick={signOutHandler} className="nav-menu-list">
                        SIGN OUT
                    </span>) : (<Link to='/auth' className="nav-menu-list">
                        SIGN IN
                    </Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown></CartDropdown>}
            </div>
            {/* 整个框架显示的位置 */}
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation;