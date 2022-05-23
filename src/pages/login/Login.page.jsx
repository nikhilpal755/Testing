import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PageWrapper, StyledButton } from "./Loginpage.styles";
import { axiosDefault } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const emailImage = require("../../Images/Login Page/login_email.png");
const passwordImage = require("../../Images/Login Page/login_password.png");
const loginpageImage = require("../../Images/Login Page/login_animation.png");

const Login = () => {
  const { auth, setAuth } = useAuth();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  let from = "/redirect";

  // console.log(auth);

  const onSubmit = (data) => {
    setLoading(true);
    axiosDefault
      .post("/api/login", data)
      .then((res) => {
        console.log(res)
        if (res?.status === 200) {
          setAuth(res?.data);
          localStorage.setItem("user", JSON.stringify(res?.data));
          setErr("");
          navigate(from, { replace: true });
        } else if (res?.status_code === 210) {
          setErr("Something went Wrong...!");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (!err?.response) {
          setErr("No Server Response");
        } else if (err.response?.status === 400) {
          setErr("Invalid Password");
        } else if (err.response?.status === 401) {
          setErr("Unauthorized");
        } else {
          console.log(err);
          setErr("Login failed");
        }
      });
  };

  const CustomErrorMsg = () => {
    if (errors.userid?.type === "required") {
      return "Username is required";
    } else if (errors.password?.type === "required") {
      return "Password is required";
    } else if (err) {
      return err;
    }
  };

  return (
    <PageWrapper>
      <img src={loginpageImage} id="animationimg" alt="Login" />
      <div id="login-form-bg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <header>Career Assistant</header>
          <div className="error" >{CustomErrorMsg()}</div>
          <div className="loginform-inputs">
            <img src={emailImage} alt="Email" />
            <input
              type="text"
              name="userid"
              placeholder="Username*"
              {...register("userid", { required: true })}
            />
          </div>
          <div className="loginform-inputs">
            <img src={passwordImage} alt="Password" />
            <input
              type="password"
              name="password"
              placeholder="Password*"
              {...register("password", { required: true })}
            />
          </div>
          <div className="remember">
            <div className="checkbox">
              <input
                type="checkbox"
                name="rememberme"
                id="remember"
      
                {...register("rememberme")}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div to="/forgot">Forgot Password ?</div>
          </div>
          <StyledButton
            variant="contained"
            color="primary"
  
            type="submit"
            disabled={loading ? true : false}
          >
            <Stack direction="row">
              {loading && (
                <CircularProgress size={20} sx={{ marginRight: "10px" }} data-testid="loading" />
              )}
              Login
            </Stack>
          </StyledButton>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Login;
