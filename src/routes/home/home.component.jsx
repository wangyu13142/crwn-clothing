import Directory from "../../components/directory/dierctory.component";
// 定义路由显示位置
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Directory></Directory>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
