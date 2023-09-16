import success from "./assets/sounds/addItem.mp3";
import noCredit from "./assets/sounds/noCredit.mp3";
import isExistSound from "./assets/sounds/isExist.mp3";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const handleSound = (soundLink) => {
    new Audio(soundLink).play();
  };

  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCourseSelect = (course, addAudio) => {
    const newSelectCourse = [...selectCourse, course];
    const newTotalPrice = totalPrice + course.price;
    const newRemainingCredit = remainingCredit - course.credit;

    const isExist = selectCourse.find((item) => item.id == course.id);
    let count = course.credit;
    if (isExist) {
      handleSound(isExistSound);
      return toast.warn("Already Selected this course", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      selectCourse.forEach((item) => {
        count = count + item.credit;
      });
      if (count > 20) {
        handleSound(noCredit);
        return toast.error("You have not enouth credit", {
          position: toast.POSITION.TOP_LEFT,
        });
      } else {
        handleSound(success);
        setRemainingCredit(newRemainingCredit);
        setTotalCredit(count);
        setTotalPrice(newTotalPrice);
        setSelectCourse(newSelectCourse);
        toast.success("Success Added Course !", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    }
  };
  // console.log(selectCourse);
  return (
    <>
      <div className="w-11/12 m-auto  mb-20">
        <Header />
        <div className="main  flex lg:flex-row flex-col gap-4  ">
          <Courses handleCourseSelect={handleCourseSelect} courses={courses} />
          <ToastContainer />
          <Cart
            selectCourse={selectCourse}
            totalCredit={totalCredit}
            remainingCredit={remainingCredit}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </>
  );
}

export default App;
