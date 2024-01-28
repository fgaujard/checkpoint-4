import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/NavbarDesktop";
import HeaderMobile from "./components/navigation/HeaderMobile";
import ToolBarMobile from "./components/navigation/ToolBarMobile";

import "./app-global.scss";

function App() {
  return (
    <>
      <Navbar />
      <HeaderMobile />
      <Outlet />
      <ToolBarMobile />
    </>
  );
}

export default App;
