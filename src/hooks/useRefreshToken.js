import { axiosDefault } from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosDefault.post("/refresh", auth?.user, {
      withCredentials: true,
    });
    setAuth((prev) => ({
      user: {
        ...prev.user,
        accessToken: response.data.accessToken,
      },
    }));
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
