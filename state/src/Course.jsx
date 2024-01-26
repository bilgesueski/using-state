import Angular from "./assets/aurora.JPG";
import Bootstrap from "./assets/fji.JPG";
import Ccsharp from "./assets/mich.JPG";
import Kompleweb from "./assets/tame.PNG";

function Course({courseName}) {
    console.log(courseName);
  return (
    <div>
      <img src={Angular} alt="" />
    </div>
  );
}

export default Course;
