import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import useAuth from "../../hooks/useAuth";

const logo = require("../../Images/logos/Career Assistant Logo.png");

const AppLogo = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.user?.profileType) {
      console.log(auth?.user?.profileType);
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2000);
    }
  }, [auth?.user?.profileType]);

  return (
    <StyledBox>
      <img src={logo} alt="Loading..." />
    </StyledBox>
  );
};

export default AppLogo;

const StyledBox = styled(Box)(
  ({ theme }) => `
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;

  img{
      margin: 20vh auto auto auto;
  }
  `
);
