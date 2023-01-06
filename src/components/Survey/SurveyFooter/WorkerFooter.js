import React from "react";
import "./SurveyFooter.css";
import { useDispatch } from "react-redux";
import { postWorkerDataAction } from "../../../redux/action/SurveyActions/workerSurveyAction";
import "../../../assets/global.css";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const wuuid = localStorage.getItem("workerId");
  const uuid = localStorage.getItem("UUID");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let surveydata = props.data;

  let btnValidation = false;
  let btn = surveydata?.map((e) => e.comment);
  btn?.map((item) => (!item.length > 0 ? (btnValidation = true) : " "));

  const Submit = () => {
    var answer = window.confirm("your data is Submitted?");
    if (answer) {
      dispatch(
        postWorkerDataAction({
          uuid,
          wuuid,
          surveydata,
        })
      );
      navigate("/survey");
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
