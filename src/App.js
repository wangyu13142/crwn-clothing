<<<<<<< HEAD
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.componet'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import CheckOut from './routes/checkout/checkout.component'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  // 根路由匹配
  return (
    <Routes>
      {/* Route 组件 path用于监听浏览器的路径(加不加反斜杠均可以) element 用于指定导向的组件 */}
      <Route path='/' element={<Navigation></Navigation>}>
        {/* 此时就相当于子路由 /home/shop 需要在父组件Home 定义进行子路由的显示的位置 Outlet  */}
        <Route index element={<Home></Home>}></Route>
        <Route path='shop/*' element={<Shop></Shop>}></Route>
        <Route path='auth' element={<Authentication></Authentication>}></Route>
        <Route path='checkout' element={<CheckOut></CheckOut>}></Route>
      </Route>
    </Routes>
=======
import  Directory from './components/directory/dierctory.component'
const App = () => {
  const categories = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: ''
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: ''
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: ''
    }
  ];
  return (
    <Directory categories={categories}></Directory>
>>>>>>> 1be1957 (updating our directory page with directory component and category item component)
  );

}

export default App;
