import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const AppContainer = styled(Box)(
  ({ theme, user }) => `
  display: grid;
  grid-template-columns: 65px 1fr;
  grid-template-rows: 60px auto;
  grid-template-areas:${
    user === "admin"
      ? `"sidebar main"  "sidebar main"`
      : `"sidebar topNavbar"  "sidebar main"`
  }
 ;
  grid-row-gap: 5px;
  grid-column-gap: 15px;
  height: 100vh;
  padding: 0 10px 0 0;
  background: #f2f2f2 0% 0% no-repeat padding-box;  
  `
);
