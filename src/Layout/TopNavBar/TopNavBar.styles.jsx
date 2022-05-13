import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledAppBar = styled(Box)(
  ({ theme }) => `
  grid-area: topNavbar;
  width: 100%;
  height: 45px;
  margin-top: 8px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 10px 10px #00000029;
  border-radius: 14px;
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  `
);
