// 相当于占位符，往往用于组件返回的根节点，实际上什么也不显示
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"; 
// 将svg图片 变成组件 叫 CrwnLogo
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
// 导入样式
import './navigation.styles.scss'
const Navigation = () => {
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
                    <Link to='/sign-in' className="nav-menu-list">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}
export default Navigation;