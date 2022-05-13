import {
  STUDENT_ACADEMICS,
  STUDENT_LEARNING,
  STUDENT_CAREER,
  STUDENT_SHOWCASE,
  STUDENT_COLLEGE,
  STUDENT_DOCUMENTS,
  STUDENT_TOOLS,
  ADMIN_PLACEMENTS,
  ADMIN_COLLEGE,
} from "./Options.data";

export const STUDENT_OPTIONS = () => {
  return [
    {
      name: "academics",
      options: STUDENT_ACADEMICS(),
    },
    {
      name: "learning",
      options: STUDENT_LEARNING(),
    },
    {
      name: "career",
      options: STUDENT_CAREER(),
    },
    {
      name: "showcase",
      options: STUDENT_SHOWCASE(),
    },
    {
      name: "college",
      options: STUDENT_COLLEGE(),
    },
    {
      name: "documents",
      options: STUDENT_DOCUMENTS(),
    },
    {
      name: "tools",
      options: STUDENT_TOOLS(),
    },
  ];
};

export const ADMIN_OPTIONS = () => {
  return [
    {
      name: "placements",
      options: ADMIN_PLACEMENTS(),
    },
    {
      name: "college",
      options: ADMIN_COLLEGE(),
    },
  ];
};
