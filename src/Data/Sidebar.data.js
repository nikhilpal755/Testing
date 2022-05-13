import dashboard from "../Images/SideBar V2/sidebar_dashboard.svg";
import academics from "../Images/SideBar V2/sidebar_academic.svg";
import learning from "../Images/SideBar V2/sidebar_learning.svg";
import career from "../Images/SideBar V2/sidebar_career.svg";
import organization from "../Images/SideBar V2/college.png";
import showcase from "../Images/SideBar V2/sidebar_showcase.svg";
import documents from "../Images/SideBar V2/sidebar_documents.png";
import tools from "../Images/SideBar V2/sidebar_tools.png";
import placements from "../Images/SideBar V2/placements.png";
import monitor from "../Images/SideBar V2/monitoring.png";
import report from "../Images/Organization/Report an Emergency/emergency.png";

export const Student_sidebar = () => {
  return [
    {
      title: "Dashboard",
      to: "/student/dashboard",
      name: "dashboard",
      icon: dashboard,
      options: false,
    },
    {
      title: "Academics",
      name: "academics",
      icon: academics,
      options: true,
    },
    {
      title: "Learning",
      name: "learning",
      icon: learning,
      options: true,
    },
    {
      title: "Career",
      name: "career",
      icon: career,
      options: true,
    },
    {
      title: "ShowCase",
      name: "showcase",
      icon: showcase,
      options: true,
    },
    {
      title: "College",
      name: "college",
      icon: organization,
      options: true,
    },
    {
      title: "Documents",
      name: "documents",
      icon: documents,
      options: true,
    },
    {
      title: "Tools",
      name: "tools",
      icon: tools,
      options: true,
    },
  ];
};

export const Admin_sidebar = () => {
  return [
    {
      title: "Dashboard",
      to: "/admin/dashboard",
      name: "dashboard",
      icon: dashboard,
      options: false,
    },
    {
      title: "Academics",
      to: "/admin/academics/affiliations",
      name: "academics",
      icon: academics,
      options: false,
    },
    {
      title: "Monitoring",
      to: "/admin/monitoring/academics",
      name: "monitoring",
      icon: monitor,
      options: false,
    },
    // {
    //   title: "Placements",
    //   name: "placements",
    //   icon: placements,
    //   options: true
    // },
    {
      title: "College",
      name: "college",
      icon: organization,
      options: true,
    },
    {
      title: "Documents",
      to: "/admin/documents/digital_signatures",
      name: "documents",
      icon: documents,
      options: false,
    },
    {
      title: "Report to developer",
      to: "/admin/report_to_developer",
      name: "report",
      icon: report,
      options: false,
    },
  ];
};
