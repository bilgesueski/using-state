import { useState } from "react";
import Course from "./Course";
import "./App.css";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const handleRemove = (index) => {
    const newCourses = courses.filter((course, i) => {
      return index !== i;
    });
    setCourses(newCourses);
  };
  const courseList = courses.map((course, index) => {
    return <Course
             key={index} 
             courseName={course}
              handleRemove={() => handleRemove(index)}
              />;
  });

  return (
    <>
      <div className="App">
        

        <div className="courseList">{courseList}</div>
        <button className="appButton" onClick={handleClick}>
          Kurs Ekle
        </button>
      </div>
    </>
  );
}

export default App;
