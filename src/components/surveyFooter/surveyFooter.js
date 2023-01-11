import React from "react";
import "./surveyFooter.css";
import "../../assets/css/global.css";
import { useDispatch } from "react-redux";
import { postSurveyDataAction } from "../../redux/action/surveyDataAction/surveyDataA";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";

const Footer = (props) => {
  const uuid = localStorage.getItem("UUID");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let surveydata = props.data;

  let btnValidation = false;
  let btn = surveydata?.map((e) => e.comment);
  btn?.map((item) => (!item.length > 0 ? (btnValidation = true) : " "));

  const Submit = () => {
    var answer = window.confirm("your are Submitted your data?");
    if (answer) {
      dispatch(
        postSurveyDataAction({
          uuid,
          surveydata,
        })
      );

      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-btn-wrapper">
          <button
            className="footer-btn"
            onClick={Submit}
            disabled={btnValidation}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
