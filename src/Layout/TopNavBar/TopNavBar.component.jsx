import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { StyledAppBar } from "./TopNavBar.styles";
import Stack from "@mui/material/Stack";
import Settings from "@mui/icons-material/Settings";
import Events from "@mui/icons-material/Event";
import Notifications from "@mui/icons-material/Notifications";
import Message from "@mui/icons-material/Email";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import useAuth from "../../hooks/useAuth";

const TopNavBar = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth?.user?.profileType === "student" && (
        <StyledAppBar>
          <Stack>
            <Typography
              variant="subtitle"
              component="div"
              sx={{ margin: "auto", fontWeight: "bold" }}
            >
              GNITS
            </Typography>
          </Stack>
          <Stack direction="row">
            <Stack
              direction="row"
              spacing={1}
              sx={{ cursor: "pointer", margin: "auto", marginRight: "5px" }}
            >
              <Typography
                variant="subtitle"
                component="div"
                sx={{ margin: "auto", fontWeight: "bold" }}
              >
                Deepika Padukoni
              </Typography>
              <Avatar
                alt="Deepika Padukoni"
                // src={ProfileIcon}
                sx={{ width: "30px", height: "30px" }}
              />
            </Stack>
            <IconButton aria-label="events" sx={{ color: "#77184a" }}>
              <Badge badgeContent={0} color="secondary" variant="dot">
                <Events />
              </Badge>
            </IconButton>
            <IconButton aria-label="message" sx={{ color: "#77184a" }}>
              <Badge badgeContent={0} color="secondary" variant="dot">
                <Message />
              </Badge>
            </IconButton>
            <IconButton aria-label="notification" sx={{ color: "#77184a" }}>
              <Badge badgeContent={0} color="secondary" variant="dot">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton aria-label="settings" sx={{ color: "#77184a" }}>
              <Settings />
            </IconButton>
          </Stack>
        </StyledAppBar>
      )}
    </>
  );
};

export default TopNavBar;
