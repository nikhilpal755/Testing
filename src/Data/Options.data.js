export const STUDENT_ACADEMICS = () => {
  return [
    {
      title: "Courses",
      to: "/Student/Courses",
    },
    {
      title: "Scheduler",
      to: "/Student/Scheduler",
    },
    {
      type: "options-dropdown",
      title: "Online",
      options: [
        {
          title: "Class",
          to: "/Student/OnlineClass",
        },
        {
          title: "Exam",
          to: "/Student/OnlineExam",
        },
      ],
    },
    {
      type: "options-button",
      title: "Reports",
      options: [
        {
          title: "Grades",
          to: "/Student/Reports/Grades",
        },
        {
          title: "Attendances",
          to: "/Student/Reports/Attendance",
        },
      ],
    },
    {
      title: "Projects",
      to: "/Student/ProjectStatus",
    },
    {
      title: "Deadlines",
      to: "/Student/Deadlines",
    },
    {
      title: "Enrollement",
      to: "/Student/Enrollement",
    },
  ];
};

export const STUDENT_LEARNING = () => {
  return [
    {
      title: "Digital Library",
      to: "/Student/learning/DigitalLibrary/books",
    },
    {
      title: "Trends",
      to: "/Student/trends/trending",
    },
    {
      title: "Video Library",
      to: "/Student/learning/videolibrary/GenericSkills",
    },
    {
      title: "Assessment",
      to: "/Student/learning/assessment",
    },
    {
      title: "Projects",
      to: "/",
    },
  ];
};

export const STUDENT_CAREER = () => {
  return [
    {
      title: "Job Guide",
      to: "/Student/career/jobguide/occupation",
    },
    {
      title: "Education Guide",
      to: "/Student/career/educationguide/CourseOriented",
    },
    {
      title: "Analytics",
      to: "/Student/career/analytics/overview",
    },
  ];
};

export const STUDENT_SHOWCASE = () => {
  return [
    {
      title: "Awards",
      to: "/Student/showcase/awards",
    },
    {
      title: "Culturals",
      to: "/Student/showcase/culturals",
    },
    {
      title: "Social Services",
      to: "/Student/showcase/socialservices",
    },
    {
      title: "Sports",
      to: "/Student/showcase/sports",
    },
    {
      title: "Events",
      to: "/Student/showcase/techevents",
    },
    {
      title: "Other Interests",
      to: "/Student/showcase/others",
    },
  ];
};

export const STUDENT_COLLEGE = () => {
  return [
    {
      title: "Student Center",
      to: "/Student/college/studentcenter",
    },
    {
      title: "Holiday Calendar",
      to: "/Student/college/holidayCalendar",
    },
    {
      title: "Announcements",
      to: "/Student/college/announcements",
    },
    {
      title: "Report Emergency",
      to: "/Student/college/reportemergency",
    },
  ];
};

export const STUDENT_DOCUMENTS = () => {
  return [
    {
      title: "Certificates",
      to: "/Student/documents/certificates",
    },
    {
      title: "Resumes",
      to: "/Student/documents/resumes",
    },
    {
      title: "Recommendations",
      to: "/Student/documents/recommendations",
    },
    {
      title: "To-Do-List",
      to: "/Student/documents/todolist",
    },
  ];
};

export const STUDENT_TOOLS = () => {
  return [
    {
      title: "Group Rooms",
      to: "/Student/grouprooms",
    },
    {
      title: "Intelligent Scripters",
      to: "/Student/scripter",
    },
  ];
};

export const ADMIN_ACADEMICS = () => {
  return [
    {
      title: "Affliations",
      to: "/admin/academics/affiliations",
    },
    {
      title: "Courses",
      to: "/admin/academics/courses",
    },
  ];
};


export const ADMIN_PLACEMENTS = () => {
  return [
    {
      title: "Staff information",
      to: "/admin/placements/staff",
    },
    {
      title: "Student Coordinator",
      to: "/admin/placements/students",
    },
    {
      title: "Companies",
      to: "/admin/placements/companies",
    },
  ];
};

export const ADMIN_COLLEGE = () => {
  return [
    {
      title: "Inventory",
      to: "/admin/college/inventory/computers",
    },
    {
      title: "Infrastructure",
      to: "/admin/college/infrastructure",
    },
    {
      title: "People",
      to: "/admin/college/people/teachers"
    },
    {
      title: "Curriculum",
      to: "/admin/college/curriculum/semister"
    }
  ]
}

export const ADMIN_DOCUMENTS = () => {
  return [
    {
      title: "Digital Signatures",
      to: "/admin/documents/signatures",
    },
    {
      title: "Certificates",
      to: "/admin/documents/certificates",
    },
  ];
};

export const ADMIN_REPORT = () => {
  return [];
};

export const ADMIN_DASHBOARD = () => {
  return [];
};
