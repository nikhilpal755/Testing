import { Outlet } from "react-router-dom";
import TopNavBar from "./TopNavBar/TopNavBar.component";
import { AppContainer } from "./BaseLayout.styles";
import SideBar from "./SideBar/SideBar.component";
import useAuth from "../hooks/useAuth";

const BaseLayout = () => {
  const { auth } = useAuth();
  return (
    <AppContainer user={auth?.user?.profileType}>
      <TopNavBar />
      <SideBar />
      <div style={{ gridArea: "main" }}>
        <Outlet />
      </div>
    </AppContainer>
  );
};

export default BaseLayout;
