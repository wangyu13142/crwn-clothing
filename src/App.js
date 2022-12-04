import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.componet'
import SignIn from './routes/sign-in/sign-in.component'
import { Routes, Route } from 'react-router-dom'

const Shop = () => {
  return (<h1>I am a student!</h1>);
}
const App = () => {
  // 根路由匹配
  return (
    <Routes>
      {/* Route 组件 path用于监听浏览器的路径(加不加反斜杠均可以) element 用于指定导向的组件 */}
      <Route path='/' element={<Navigation></Navigation>}>
        {/* 此时就相当于子路由 /home/shop 需要在父组件Home 定义进行子路由的显示的位置 Outlet  */}
        <Route index element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='sign-in' element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );

}

export default App;
