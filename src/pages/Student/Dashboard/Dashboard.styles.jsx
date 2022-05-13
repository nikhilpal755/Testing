import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const Spaper = styled(Paper)(
  ({ theme }) => `
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 10px;
    display: grid;
    grid-template-rows: 30px 1fr 15px;
    grid-gap: 2px;  

    #clock{
      width: 17px;
      height: 17px;
      opacity: 0.7;    
    }

    #c {
      width: 17px;
      height: 17px;
      opacity: 0.7;
      margin-left: 5px;
    } 
    
    .tech-container{
      width: 96%;
      display: grid;
      grid-template-columns: 80px 1fr;
      margin-bottom: 4px;
    }
    `
);

export const BTypography = styled(Typography)(
  ({ theme }) => `
    font-weight: bold;
    font-size: 18px;
    color: black;
  `
);

export const MPaper = styled(Paper)(
  ({ theme }) => `
    border-radius: 15px;
    height: 45px;
    padding: 3px 10px;
  `
);
