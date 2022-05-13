import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(
  ({ theme }) => `
  grid-area: sidebar;
  background: #77184a 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #000000;
  color: white;
  z-index: 9300;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  `
);
