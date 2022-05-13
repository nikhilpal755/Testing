import React, { useState, useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import { StyledOptions, OptionsTitle } from "./SidebarOptions.styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  STUDENT_OPTIONS,
  ADMIN_OPTIONS,
} from "../../../Data/Sidebar_options_map";

const SidebarOptions = ({ optionFor, user, reset, name }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const get_options = () => {
      if (user === "student") {
        STUDENT_OPTIONS().forEach((item) => {
          if (item.name === name) {
            setOptions(item.options);
          }
        });
      } else if (user === "admin") {
        ADMIN_OPTIONS().forEach((item) => {
          if (item.name === name) {
            setOptions(item.options);
          }
        });
      }
    };
    get_options();
  }, []);

  return (
    <StyledOptions>
      <OptionsTitle>{optionFor}</OptionsTitle>
      <Stack spacing={1.5} sx={{ paddingLeft: "40px", marginTop: "40px" }}>
        {options.map((option) => {
          return option.type === undefined ? (
            <Typography
              key={option.title}
              onClick={reset}
              sx={{
                cursor: "pointer",
                fontSize: "16px",
                "&:hover": {
                  fontWeight: "bold",
                },
              }}
            >
              {option.title}
            </Typography>
          ) : (
            <Accordion
              key={option.title}
              elevation={0}
              disableGutters={true}
              sx={{
                backgroundColor: "inherit",
                color: "white",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  padding: "0 10px 0 40px",
                  minHeight: 25,
                  maxHeight: 25,
                  marginLeft: "-40px",
                  "&.Mui-expanded": {
                    minHeight: 25,
                    maxHeight: 25,
                    marginTop: "5px",
                  },
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontSize: "16px",
                    padding: 0,
                  }}
                >
                  {option.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "3px 15px",
                  cursor: "pointer",
                }}
              >
                <Stack spacing={0.5}>
                  {option.options?.map((suboption) => {
                    return (
                      <Typography
                        key={suboption.title}
                        onClick={reset}
                        sx={{
                          "&.hover": {
                            fontWeight: "bold",
                          },
                        }}
                      >
                        {suboption.title}
                      </Typography>
                    );
                  })}
                </Stack>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    </StyledOptions>
  );
};

export default SidebarOptions;
