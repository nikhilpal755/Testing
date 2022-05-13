import useAuth from "../hooks/useAuth";
import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";

const RoleBasedRouting = ({ user }) => {
  const { auth } = useAuth();

  if (auth?.user?.profileType === "student") {
    return <StudentRoutes />;
  } else if (auth?.user?.profileType === "admin") {
    return <AdminRoutes />;
  }
};

export default RoleBasedRouting;
