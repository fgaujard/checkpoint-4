import { useLoaderData, Outlet } from "react-router-dom";
import Navbar from "./components/navigation/NavbarDesktop";
import HeaderMobile from "./components/navigation/HeaderMobile";
import ToolBarMobile from "./components/navigation/ToolBarMobile";

import "./app-global.scss";

function App() {
  const user = useLoaderData();

  return (
    <>
      <Navbar
        isLogin={user.login}
        isAdmin={user.admin}
        username={user.username}
      />
      <HeaderMobile
        isLogin={user.login}
        isAdmin={user.admin}
        username={user.username}
      />
      <Outlet />
      <ToolBarMobile isLogin={user.login} />
    </>
  );
}

export default App;
