import React from "react";

const Cart = ({ selectCourse, totalCredit, totalPrice, remainingCredit }) => {
  return (
    <div className="lg:w-3/12 bg-white p-6 rounded-xl h-min  	">
      <h3 className="text-blue text-base pb-4 font-bold border-b-2 border-silver">
        Credit Hour Remaining {remainingCredit} hr
      </h3>
      <div className="border-b-2 border-silver pb-6">
        <h2 className="text-black text-xl font-bold  mt-4 mb-5">Course Name</h2>
        <ul className="space-y-3 ml-6">
          {selectCourse.map((course) => (
            <li key={course.id} className="text-gray text-sm list-decimal">
              {course.title}
            </li>
          ))}
        </ul>
      </div>
      <h5 className="py-4 border-b-2 border-silver text-[#1C1B1BCC] font-medium text-base">
        Total Credit Hour : {totalCredit}
      </h5>
      <h5 className="pt-4 font-semibold  text-[#1C1B1BCC] text-base ">
        Total Price : {totalPrice} USD
      </h5>
    </div>
  );
};

export default Cart;
