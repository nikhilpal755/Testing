import React, { useState } from "react";
import { StyledBox } from "./SideBar.styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Student_sidebar, Admin_sidebar } from "../../Data/Sidebar.data";
import SidebarOptions from "./SidebarOptions/SidebarOptions.component";
import Backdrop from "./Backdrop/Backdrop.component";
import Logout from "../../Images/SideBar V2/sidebar_logout.png";
import useAuth from "../../hooks/useAuth";

const SideBar = () => {
  const { auth, setAuth } = useAuth();
  const [activeButton, setActiveButton] = useState();
  const [displayOptions, setDisplay] = useState(true);
  const [user] = useState(auth.user?.profileType);
  // console.log(auth);

  let NavBar;

  if (user === "student" || user === "teacher"  ) {
    NavBar = Student_sidebar;
    // localStorage.setItem("activeDarkSite", true)
  } else if (user === "admin") {
    NavBar = Admin_sidebar;
  }


  // console.log(NavBar)

  const [navItems] = useState(NavBar);

  // console.log(navItems);

  const handleSideBar = (name) => {
    if (activeButton === name) {
      setDisplay(false);
      setActiveButton("");
    } else {
      setActiveButton(name);  
      setDisplay(true);
    }
  };

  const ResetOptions = () => {
    setDisplay(false);
    setActiveButton("");
  };

  const handleLogout = () => {
    setAuth("");
    localStorage.removeItem("user");
  };

  return (
    <>
      <StyledBox>
        <Stack spacing={0.6}>
          {navItems?.map((item) => {
            return (
              <Stack spacing={0} key={item.name}>
                <IconButton
                  name={item.name}
                  icon={item.icon}
                  onClick={() => handleSideBar(item.name)}
                />
                {activeButton === item.name && displayOptions && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#fff",
                    }}
                  />
                )}
              </Stack>
            );
          })}
        </Stack>
        <IconButton name="Logout" icon={Logout} onClick={handleLogout} />
        {navItems?.map((item) => {
          return (
            activeButton === item.name &&
            displayOptions &&
            item.options && (
              <SidebarOptions
                key={item.name}
                optionFor={item.title}
                name={item.name}
                user={user}
                // user={appState.user && appState.user.profiletype}
                reset={ResetOptions}
              />
            )
          );
        })}
      </StyledBox>
      {navItems?.map((item) => {
        return (
          activeButton === item.name &&
          displayOptions &&
          item.options && (
            <Backdrop key={item.name} handleClick={ResetOptions} />
          )
        );
      })}
    </>
  );
};

export default SideBar;

const IconButton = ({ name, icon, onClick }) => {
  return (
    <Button onClick={onClick} sx={{ width: "100%", color: "#fff" }}>
      <Stack spacing={1}>
        {/* <SendIcon sx={{ margin: "auto" }} /> */}
        <img
          src={icon}
          alt={name}
          style={{ width: "25px", height: "25px", margin: "auto" }}
        />
        <Typography variant="body2" sx={{ fontSize: "10px" }}>
          {name}
        </Typography>
      </Stack>
    </Button>
  );
};
