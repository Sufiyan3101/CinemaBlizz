import "../Css/AdminBGAnimation.css";
import { Link } from "react-router-dom";
import BlurText from "../ReactBitz/BlurText";

const AddMovie = () => {
  return (
    <div className="admindashboard">
      <BlurText
      delay={150}
      animateBy="words"
      direction="top">
      <div className="content">
        <Link
          to="add-bollywood"
          className="border rounded-md px-3 py-1 mr-5 border-gray-800 hover:bg-gray-800 text-white hover:text-white text-xl"
        >
          Bollywood
        </Link>
        <Link
          to="add-hollywood"
          className="border rounded-md px-3 py-1 mr-5 border-gray-800 hover:bg-gray-800 text-white hover:text-white text-xl"
        >
          Hollywood
        </Link>
      </div>
      </BlurText>
      <div>
        <span className="AD1"></span>
        <span className="AD2"></span>
        <span className="AD3"></span>
        <span className="AD4"></span>
        <span className="AD5"></span>
      </div>
    </div>
  );
};

export default AddMovie;





