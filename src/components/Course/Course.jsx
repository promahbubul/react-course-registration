import React from "react";
import { BiBookOpen } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";

const Course = ({ courses, handleCourseSelect }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id} className="p-4 bg-white	rounded-xl">
          <img src={course.cover_img} className="w-full" alt="" />
          <h3 className="text-black text-base font-semibold font-semibold my-4">
            {course.title}
          </h3>
          <p className="text-gray text-sm">{course.desc}</p>
          <div className="flex justify-between mb-6 mt-4">
            <div className="flex">
              <FiDollarSign className="text-2xl" />
              <span className="text-gray">Price: {course.price}</span>
            </div>
            <div className="flex">
              <BiBookOpen className="text-2xl" />
              <span className="text-gray">Credit : {course.credit}hr</span>
            </div>
          </div>
          <button
            onClick={() => handleCourseSelect(course)}
            className="bg-blue text-center py-3 px-5  w-full  hover:bg-hoverBlue rounded-md mx-auto block text-white font-semibold text-lg"
          >
            Select
          </button>
        </div>
      ))}
    </>
  );
};

export default Course;
