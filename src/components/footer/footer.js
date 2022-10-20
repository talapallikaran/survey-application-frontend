import React from "react";
import "./footer.css";
import { useDispatch } from "react-redux";
import { postSurveyDataAction } from "../../redux/action/action";
import "../../global.css";

const Footer = (props) => {
  const dispatch = useDispatch();
  const{surveydata} = props;
  const uuid = localStorage.getItem("UUID")

  const Submit = () => {

    dispatch(postSurveyDataAction({uuid,surveydata}));
    alert("All Data is Submitted Successfully")

  };

  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-btn-wrapper">
          <button
            className="footer-btn"
            onClick={Submit}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;