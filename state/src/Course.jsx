import Angular from "./assets/aurora.JPG";
import Bootstrap from "./assets/fji.JPG";
import Ccsharp from "./assets/mich.JPG";
import KompleWeb from "./assets/tame.PNG";
import './Course.css'

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
