import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourseSelect, courses }) => {
  return (
    <div className="lg:w-9/12 bottom-2 border-black grid lg:grid-cols-3 grid-cols-1 gap-4 box-border justify-between md:grid-cols-2">
      <Course courses={courses} handleCourseSelect={handleCourseSelect} />
    </div>
  );
};

export default Courses;
