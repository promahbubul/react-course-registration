import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourseSelect, courses }) => {
  return (
    <div className="w-9/12 bottom-2 border-black grid grid-cols-3 gap-4 box-border justify-between">
      <Course courses={courses} handleCourseSelect={handleCourseSelect} />
    </div>
  );
};

export default Courses;
