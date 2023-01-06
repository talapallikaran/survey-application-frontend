import React, { useState, useEffect } from "react";
import "./adminFlow.css";
import { user } from "../../../assets/img/Img";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import SignIn from "../../admin/addUser/AddUser";
import EditUser from "../../admin/editUser/editUser";
import { fetchUserAction } from "../../../redux/action/userDataAction/fetchUser";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../../../redux/action/userDataAction/editAction";
import { deleteUserData } from "../../../redux/action/userDataAction/deleteUserA";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import EscapeOutside from "react-escape-outside";
import "../../../assets/css/responsive.css";
import { userDataStatic } from "../../common/data";

const AdminFlow = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state?.fetchUserReducer?.toggle);
  const userData = useSelector((state) => state?.fetchUserReducer?.data);

  useEffect(() => {
    dispatch(fetchUserAction());
    window.scrollTo(0, 0);
  }, []);
  const Edit = (data) => {
    setShowEdit(true);
    dispatch(editData(data));
  };

  // useEffect(() => {
  //   userDataStatic.map((staticData) => {
  //     userData &&
  //       userData?.map((ApiData) => {
  //         console.log("staticData", staticData);
  //         console.log("ApiData", ApiData);
  //         if (staticData.id == ApiData.id) {
  //           staticData.id = ApiData.id

  //         }
  //       });
  //   });
  // }, []);

  const notify = () => toast.success("successful");
  const emailError = () => toast.error("email is taken");
  const deletes = () => toast.success("user is deleted sucessfully");

  const deleteUser = (id, data) => {
    dispatch(deleteUserData(id, data));
    setTimeout(() => {
      window.location.reload();
    }, 400);
    deletes();
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
          <div> {show && <SignIn setShow={setShow} />}</div>
        </EscapeOutside>
        <EscapeOutside onEscapeOutside={() => setShowEdit(false)}>
          <div>
            {showEdit && (
              <EditUser
                setShowEdit={setShowEdit}
                notify={notify}
                emailError={emailError}
              />
            )}
          </div>
        </EscapeOutside>

        {toggle && (
          <div className="user-map">
            {userData !== undefined &&
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
                                {e.reporting_person_name}
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
            {userData == undefined &&
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
                                {e.reporting_person_name}
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
        )}
      </div>
    </div>
  );
};
export default AdminFlow;
