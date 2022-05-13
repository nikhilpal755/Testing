import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { customAPI } from "../../../api/axios";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Spaper, BTypography, MPaper } from "./Dashboard.styles";
import Schedules from "../../../Images/Dashboard/Schedule/Schedule.png";
import clock from "../../../Images/Dashboard/Messenger Room/clock.png";
import Messages from "../../../Images/Dashboard/Messenger Room/message.png";
import Todos from "../../../Images/Dashboard/todolist/Icon ToDoList.png";
import Technology from "../../../Images/Dashboard/News/newspaper.png";
import Deadline from "../../../Images/Dashboard/Deadlines/Deadlines.png";
import Analytic from "../../../Images/Dashboard/Analytics/seo-report.png";
import moment from "moment";
import { Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const StudentDashboard = () => {
  const { setAuth } = useAuth();

  const [messages, setMessages] = useState([]);
  const [todos, setTodos] = useState([]);
  const [trend, setTrend] = useState([]);
  const requestOne = customAPI("dashboardAPI").get(
    "/v1/dashboard/student/messages"
  );
  const requestTwo = customAPI("dashboardAPI").get(
    "/v1/dashboard/student/techntrends"
  );
  const requestThree = customAPI("dashboardAPI").get(
    "/v1/dashboard/student/todolist"
  );

  useEffect(() => {
    Promise.allSettled([requestOne, requestTwo, requestThree])
      .then((value) => {
        console.log(value);
        if (value[0]["status"] == "fulfilled") {
          setMessages(value[0]["value"]["data"]);
        }
        if (value[1]["status"] == "fulfilled") {
          setTrend(value[1]["value"]["data"]);
        }
        if (value[2]["status"] == "fulfilled") {
          setTodos(value[2]["value"]["data"]);
        } else if (
          value[0]["status"] == "rejected" &&
          value[0]["reason"]["response"]["status"] == 403
        ) {
          setAuth("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      <Grid
        container
        spacing={1.5}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ height: "50%" }}>
          <Spaper elevation={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Schedules}
                alt="Schedules"
                style={{ width: "28px", height: "28px" }}
              />
              <BTypography>Schedule</BTypography>
            </Stack>
            <Stack sx={{ margin: "auto", fontWeight: "bold" }}>
              <Typography variant="boldStyle">
                Schedules will appear soon..!
              </Typography>
            </Stack>
          </Spaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: "50%" }}>
          <Spaper elevation={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Messages}
                alt="messages"
                style={{ width: "28px", height: "28px" }}
              />
              <BTypography>Messages</BTypography>
            </Stack>
            <Stack spacing={1} sx={{ marginTop: "3px" }}>
              {messages.length > 0 ? (
                messages.map((msg, i) => {
                  return (
                    <MPaper elevation={3} key={i}>
                      <Stack direction="row" spacing={1}>
                        <img src={clock} alt="" id="c" />
                        <Typography variant="light">
                          {moment().utc(msg.date_time).format("DD MMM Y")}
                        </Typography>
                        <Typography variant="boldItalic">
                          {msg.sender_name}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="ellipsis"
                        sx={{
                          marginLeft: "5px",
                        }}
                      >
                        {msg.subject}
                      </Typography>
                    </MPaper>
                  );
                })
              ) : (
                <Stack sx={{ margin: "auto" }}>
                  <Typography variant="boldStyle">
                    Start messaging..!
                  </Typography>
                </Stack>
              )}
            </Stack>
            <SLink text="more..." />
          </Spaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: "50%" }}>
          <Spaper elevation={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Todos}
                alt="Todos"
                style={{ width: "28px", height: "28px" }}
              />
              <BTypography>To-Do-List</BTypography>
            </Stack>
            <Stack>
              {todos.length > 0 ? (
                todos.map((obj, i) => {
                  return (
                    <MPaper elevation={3} key={i}>
                      <Stack direction="row" spacing={1}>
                        <img src={clock} alt="" id="c" />
                        <Typography variant="light">
                          {obj.todo_date}
                          {/* {moment.utc(obj.todo_date).format("DD MMM Y")} */}
                        </Typography>
                        <Typography variant="boldItalic">
                          {obj.title}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="ellipsis"
                        sx={{
                          marginLeft: "5px",
                        }}
                      >
                        {obj.message_}
                      </Typography>
                    </MPaper>
                  );
                })
              ) : (
                <Stack sx={{ margin: "auto", fontWeight: "bold" }}>
                  <Typography variant="boldStyle">
                    Prioritize your works
                  </Typography>
                </Stack>
              )}
            </Stack>
            <SLink text="more..." />
          </Spaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: "50%" }}>
          <Spaper elevation={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Technology}
                alt="Technology"
                style={{ width: "28px", height: "28px" }}
              />
              <BTypography>Technology and Trends</BTypography>
            </Stack>
            <Stack
              sx={{
                fontSize: "14px",
                fontStyle: "italic",
                margin: "auto",
                paddingLeft: "5px",
              }}
            >
              {trend.length > 0 ? (
                trend.map((obj, i) => {
                  return (
                    <div
                      className="tech-container"
                      key={i}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(obj.news_link);
                      }}
                    >
                      <Typography variant="light">
                        {moment().utc(obj.news_date).format("D MMM Y")}
                      </Typography>
                      <Typography
                        variant="ellipsis"
                        sx={{ fontWeight: "bold" }}
                      >
                        {obj.news_title}
                      </Typography>
                    </div>
                  );
                })
              ) : (
                <Stack sx={{ margin: "auto", fontWeight: "bold" }}>
                  <Typography variant="boldStyle">
                    Technical news will appear soon..
                  </Typography>
                </Stack>
              )}
            </Stack>
            <SLink text="more..." />
          </Spaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: "50%" }}>
          <Spaper elevation={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Deadline}
                alt="Deadline"
                style={{ width: "28px", height: "28px" }}
              />
              <BTypography>Deadlines</BTypography>
            </Stack>
            <Stack sx={{ margin: "auto", fontWeight: "bold" }}>
              <Typography variant="boldStyle">Try this tool..!</Typography>
            </Stack>
            <SLink text="more..." />
          </Spaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ height: "50%" }}>
          <Spaper elevation={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={Analytic}
                alt="Analytic"
                style={{ width: "28px", height: "28px" }}
              />
              <BTypography>Analytics</BTypography>
            </Stack>
            <Stack sx={{ margin: "auto", fontWeight: "bold" }}>
              <Typography variant="boldStyle">
                Analytics will appear soon..!
              </Typography>
            </Stack>
            <SLink text="more..." />
          </Spaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDashboard;

const SLink = ({ text }) => {
  return (
    <Link
      to="#"
      style={{
        color: "#07668AD9",
        textDecoration: "none",
        fontStyle: "italic",
        marginLeft: "auto",
      }}
    >
      {text}
    </Link>
  );
};
