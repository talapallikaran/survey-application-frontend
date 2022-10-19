import React, { useEffect, useState } from "react";
import "./footer.css";
import { useSelector, useDispatch } from "react-redux";
import { postSurveyDataAction } from "../../redux/action/action";
import "../../global.css";

const Footer = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const uuid = "a2c4cff5-b222-4c9b-a971-5ddc7413dc4b";
  const surveyData = useSelector((state) => state?.data);

  useEffect(() => {
    data.length === 0
      ? setData([{surveyData }])
      : setData((data) => [...data, {surveyData}]);
  }, [surveyData]);

  const Submit = () => {
    dispatch(postSurveyDataAction({uuid,data}));
  };
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-btn-wrapper">
          <button
            className="footer-btn"
            onClick={Submit}
            // disabled={!survey1Data || !survey2Data || !survey3Data}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;