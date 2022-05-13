import { useState, useEffect } from "react";
import { customAPI } from "../api/axios";
import useAuth from "../hooks/useAuth";

const useAxios = ({ endpoint, method, url, data }) => {
  const { setAuth } = useAuth();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await customAPI(endpoint)[method](url, data);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      console.log(err, "error");
      if (err.status == "403") {
        console.log("error");
      }
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useAxios;

// const { response, error, loading } = useAxios({
//   endpoint: "dashboardAPI",
//   method: "get",
//   url: "/v1/dashboard/student/messages",
// });

// useEffect(() => {
//   console.log(response);
// }, [response]);
