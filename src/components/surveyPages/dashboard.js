import React from "react";
import "./dashboard.css";
import { deshboard } from "../common/data";
import { surveyUser } from "../../assets/img/Img";
import SurveyPages from "../../pages/surveyPages";

const Dashboard = () => {
  return (
    <div>
      <SurveyPages />
      <div className="dashboard-container">
        <h5 className="hello-xyz">
          Hello, <i>XYZ</i>
        </h5>
        <div className="dashboard-wrapper">
          <div className="wrapper-left">
            <p className="pending-survey">Pending survey approvals</p>

            <table id="panding-survey">
              <thead>
                <tr>
                  <th className="name">Name</th>
                  <th className="survey-points-th">Survey points</th>
                  <th className="approval-status">Approval status</th>
                </tr>
              </thead>
              <tbody>
                {deshboard?.map((data, id) => {
                  return (
                    <React.Fragment key={id}>
                      <tr>
                        <td>
                          <div className="dashbord-name-container">
                            <div>
                              <img
                                className="survey-dashbord-img"
                                src={surveyUser}
                              />
                            </div>
                            <div className="person-details">
                              <p>
                                <b className="person">{data.person}</b>
                              </p>
                              <p className="designation">
                                <i>{data.Designation}</i>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          {data.points == " " ? (
                            <p className="points">N/A</p>
                          ) : (
                            <p className="points">{data.points}</p>
                          )}
                        </td>
                        <td>
                          {data.status == 1 ? (
                            <span className="Pending">Pending</span>
                          ) : (
                            <span className="submitted"> Submitted</span>
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="wrapper-right">
            <p className="pending-survey">Pending surveys from engineers</p>

            <table id="panding-survey">
              <thead>
                <tr>
                  <th className="name">Name</th>
                  <th className="survey-points-th">Survey points</th>
                  <th className="approval-status">Approval status</th>
                </tr>
              </thead>
              <tbody>
                {deshboard?.map((data, id) => {
                  return (
                    <React.Fragment key={id}>
                      <tr>
                        <td>
                          <div className="dashbord-name-container">
                            <div>
                              <img
                                className="survey-dashbord-img"
                                src={surveyUser}
                              />
                            </div>
                            <div className="person-details">
                              <p>
                                <b className="person">{data.person}</b>
                              </p>
                              <p className="designation">
                                <i>{data.Designation}</i>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          {data.points == " " ? (
                            <p className="points">N/A</p>
                          ) : (
                            <p className="points">{data.points}</p>
                          )}
                        </td>
                        <td>
                          {data.status == 1 ? (
                            <span className="Pending">Pending</span>
                          ) : (
                            <span className="submitted"> Submitted</span>
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="dashborder-team">
          <p className="team-statistics">Team statistics </p>
          <div className="team-form">
            <table id="team-survey">
              <thead>
                <tr>
                  <th className="team-name">Name</th>
                  <th className="team-survey-points">Survey points</th>
                  <th className="team-approval-status">Survey status </th>
                </tr>
              </thead>
              <tbody>
                {deshboard?.map((data, id) => {
                  return (
                    <React.Fragment key={id}>
                      <tr>
                        <td>
                          <div className="team-name-container">
                            <div>
                              <img
                                className="survey-dashbord-img"
                                src={surveyUser}
                              />
                            </div>
                            <div className="person-details">
                              <p>
                                <b className="person">{data.person}</b>
                              </p>
                              <p className="designation">
                                <i>{data.Designation}</i>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          {data.points == " " ? (
                            <p className="team-points">N/A</p>
                          ) : (
                            <p className="team-points">{data.points}</p>
                          )}
                        </td>
                        <td>
                          {data.status == 1 ? (
                            <span className="team-Pending">Pending</span>
                          ) : (
                            <span className="team-submitted"> Submitted</span>
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
