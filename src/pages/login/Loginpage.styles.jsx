import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const PageWrapper = styled("div")(
  ({ theme }) => `
    display: grid;
    grid-template-columns: 1.2fr 3fr;
    height: 100vh;
    overflow: hidden;

     #animationimg{
       width: 100%;
       height: 100vh;
     }

     #login-form-bg{
      background-image: linear-gradient(to right, rgb(24, 79, 88), rgba(28, 85, 94, 0.039));
      background-repeat: no-repeat;   
      display: flex;
      justify-content: flex-end; 
      align-items: flex-start;  

      form{
        margin: 25vh 15vw 0 0;
        font-size: 14px;
        
        header{
            font-family: "Forte" , "Regular";
            font-size: 45px;
            padding: 0 0 0 2vw;
        }

        .error{
          color: #FF0011;
          text-align: center;
          font-style: italic;
          font-size: 1.5em;
          line-height: 2em;              
          margin: 0 0 15px 30px;
          height: 40px;
          opacity: 1;
      }

        .loginform-inputs{
          display: flex;
          margin: 0 0 20px 0;
      
          img{
              height: 2em;
              width: 2em;
              opacity: 0.5;
              margin: 3px 10px 0 0;
          }

          input{
              flex: 1;
              border-radius: 15px;
              border: 1px solid #707070;
              height: 40px;
              font-size: 1.2em; 
              line-height: 2em;
              padding: 5px 10px;
              font-family: "Candara";
          }

          input:focus {
          outline: none;
        }
        }

        .remember{
          margin: 0 0 1em 3em;
          display: flex;
          justify-content : space-between;
          font-style: italic;
        
          input[type=checkbox]{
              margin-right: 5px;
              cursor: pointer;
          }

          a{
              text-decoration: none;
              color: #000;
              cursor: pointer;
          }
      }
      }
     }
  `
);

export const StyledButton = styled(Button)(
  ({ theme }) => `
  width: 90%;
  margin-left: 12%;
  border-radius: 15px;
  background-color: #195059;
  color: #ffffffb3;

  &:hover{
    background-color: #195059;
    color: white;
  }
  `
);
