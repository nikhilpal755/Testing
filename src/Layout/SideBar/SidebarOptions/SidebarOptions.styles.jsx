import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledOptions = styled(Box)(
  ({ theme }) => `
  background: #773558 0% 0% no-repeat padding-box;
  width: 213px;
  height: 100%;
  top: 0;
  position: fixed;
  margin-left: 65px;
  font-size: 14px;
  `
);

export const OptionsTitle = styled(Box)(
  ({ theme }) => `
  width: 213px;
  background: #6d3251 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 6px #00000029;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  font: normal normal bold 18px/22px Candara;
  letter-spacing: 0px;
  color: #ffffffd9;
  opacity: 1;
  `
);
