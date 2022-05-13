// import Settings from "../Images/MainBar/gear.png";
// import Events from "../Images/MainBar/events.png";
// import Message from "../Images/MainBar/message.png";
import OnlineClass from "../Images/MainBar/OnlineClass.png";
import Courses from "../Images/MainBar/teacher.png";
import Career from "../Images/MainBar/career.png";
import Projects from "../Images/MainBar/Projects.png";
import Reports from "../Images/MainBar/report-card.png";
import Deadlines from "../Images/MainBar/Deadlines.png";
// import Notifications from "../Images/MainBar/Notifications.png";

import Settings from "@mui/icons-material/Settings";
import Events from "@mui/icons-material/Event";
import Notifications from "@mui/icons-material/Notifications";
import Message from "@mui/icons-material/Email";

export function TopNavbarItems() {
  return [
    {
      to: "/Student/events/thisweek",
      icon: Events,
      name: "Events",
    },
    {
      to: "/Student/messages",
      icon: Message,
      name: "Message",
    },
    {
      to: "/Student/notifications",
      icon: Notifications,
      name: "Notifications",
    },
    {
      to: "/Student/settings/page",
      icon: Settings,
      name: "Settings",
    },
  ];
}

export function TopNavShortcuts() {
  return [
    {
      to: "/Student/online/class",
      icon: OnlineClass,
    },
    {
      to: "/Student/academics/courses",
      icon: Courses,
    },
    {
      to: "/Student/academics/deadlines",
      icon: Deadlines,
    },
    {
      to: "/Student/academics/projects",
      icon: Projects,
    },
    {
      to: "/Student/career/jobGuide",
      icon: Career,
    },
    {
      to: "/Student/academics/reports",
      icon: Reports,
    },
  ];
}
