import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-9/12 bottom-2 border-black grid grid-cols-3 gap-4 box-border justify-between">
      <Course courses={courses} />
    </div>
  );
};

export default Courses;
