import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { MdDelete } from "react-icons/md";
import EscapeOutside from "react-escape-outside";
import "./admin.css";
import { user } from "../../assets/Img/Img";
import { getRegistrationDataAction } from "../../redux/action/RegistrationUser/getRegistrationDataAction";
import { editUserData } from "../../redux/action/AdminUser/EditUserDataAction";
import { deleteUserAction } from "../../redux/action/AdminUser/deleteUserAction";
import AddUser from "../AddUser/Adduser";
import EditUser from "../EditUser/Edituser";
import { userDataStatic } from "../Survey/surveydata";

const Admin = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector(
    (state) => state?.getRegistrationDataReducer?.users
  );

  useEffect(() => {
    dispatch(getRegistrationDataAction());
    window.scrollTo(0, 0);
  }, []);

  const Edit = (data) => {
    setShowEdit(true);
    dispatch(editUserData(data));
  };

  const deleteUser = (id, data) => {
    dispatch(deleteUserAction(id, data));
    window.location.reload();
  };

  return (
    <div>
      <div className="adminFlow">
        <ToastContainer
          position="top-center"
          className="ToastContainer"
          autoClose={3000}
        />
        <div className="adminFlow-user">
          <span className="adminFlow-title">
            Company name’s team total members in the company
          </span>
          <span>
            <button
              className="adminFlow-button"
              onClick={() => {
                setShow(true);
              }}
            >
              +Add new
            </button>
          </span>
        </div>
        <EscapeOutside onEscapeOutside={() => setShow(false)}>
          <div> {show && <AddUser setShow={setShow} />}</div>
        </EscapeOutside>
        <EscapeOutside onEscapeOutside={() => setShowEdit(false)}>
          <div>{showEdit && <EditUser setShowEdit={setShowEdit} />}</div>
        </EscapeOutside>

        {
          <div className="user-map">
            {userData.length !== 0 &&
              userData &&
              userData?.map((e, id) => {
                return (
                  <div className="user" key={id}>
                    {e.image_src == null ? (
                      <img className="user-img-null" src={user} alt="Hello" />
                    ) : (
                      <img
                        className="user-img"
                        src={"http://localhost:4000/" + e.image_src}
                        alt="Hello"
                      />
                    )}
                    <span className="user-details">{e.name}</span>
                    <div className="user-report">
                      <div>
                        <span className="user_name_Id">
                          {e.reporting_person_name == null ? (
                            <b className="reporting_person_name">{e.role}</b>
                          ) : (
                            <div>
                              <span className="reporting_to">reporting To</span>
                              <br />
                              <span className="reporting_person_name">
                                <b> {e.reporting_person_name}</b>
                              </span>
                            </div>
                          )}
                        </span>
                      </div>
                      <div>
                        <span
                          className="delete-icon"
                          onClick={() => deleteUser(e.id, e)}
                        >
                          <MdDelete />
                        </span>
                      </div>
                      <div>
                        <span className="edit-icon" onClick={() => Edit(e)}>
                          <FiEdit />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

            {userData.length == 0 &&
              userDataStatic &&
              userDataStatic?.map((e, id) => {
                return (
                  <div className="user" key={id}>
                    {e.image_src == null ? (
                      <img className="user-img-null" src={user} alt="Hello" />
                    ) : (
                      <img
                        className="user-img"
                        src={"http://localhost:4000/" + e.image_src}
                        alt="Hello"
                      />
                    )}
                    <span className="user-details">{e.name}</span>
                    <div className="user-report">
                      <div>
                        <span className="user_name_Id">
                          {e.reporting_person_name == null ? (
                            <b className="reporting_person_name">{e.role}</b>
                          ) : (
                            <div>
                              <span className="reporting_to">reporting To</span>
                              <br />
                              <span className="reporting_person_name">
                                <b> {e.reporting_person_name}</b>
                              </span>
                            </div>
                          )}
                        </span>
                      </div>
                      <div>
                        <span
                          className="delete-icon"
                          onClick={() => deleteUser(e.id, e)}
                        >
                          <MdDelete />
                        </span>
                      </div>
                      <div>
                        <span className="edit-icon" onClick={() => Edit(e)}>
                          <FiEdit />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        }
      </div>
    </div>
  );
};

export default Admin;
