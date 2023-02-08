import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../../redux/action/loginAction/loginA";
import loginValidate from "./loginFormValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../../../assets/css/responsive.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [validateData, setValidatedata] = useState(null);

  const LoginData = useSelector((state) => state?.loginUserReducer?.data);
  const RegisterData = useSelector(
    (state) => state?.signInUserReducer?.data?.data
  );
  const notify = () => toast.error("Please enter Valid Data");
  let uuid = LoginData && LoginData.uuid;

  useEffect(() => {
    if (LoginData?.role_id === 1) {
      navigate("/admin");
      localStorage.setItem("UserRole", "admin");
      window.location.reload();
    } else if (LoginData?.status === "success") {
      localStorage.setItem("UserRole", "survey");
      navigate("/Survey");
      window.location.reload();
      localStorage.setItem("UUID", uuid);
      localStorage.setItem(
        "WorkerData",
        JSON.stringify([LoginData?.worker_data])
      );
      localStorage.setItem("UUID", uuid);
      localStorage.setItem("email", values.email);
      localStorage.setItem(
        "WorkerData",
        JSON.stringify([LoginData?.worker_data])
      );
      localStorage.setItem("img", LoginData?.profile);
      localStorage.setItem("name", LoginData?.name);
    } else if (RegisterData?.status === "success") {
      toast.success("your Data is Submited");
    } else if (LoginData?.response?.data?.status === "failed") {
      notify();
    }
  }, [LoginData]);

  useEffect(() => {
    let surveyRole = localStorage.getItem("UserRole");
    let adminRole = localStorage.getItem("UserRole");
    if (surveyRole === "survey") {
      navigate("/Survey");
    } else if (adminRole === "admin") {
      navigate("/admin");
    }
  });

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    if (validateData) {
      setErrors(loginValidate(values));
    }
  };
  const Submit = (e) => {
    setValidatedata(true);
    dispatch(loginUserAction(values));
    setErrors(loginValidate(values, setValues));
  };
  return (
    <div>
      <div className="login-form-container">
        <div className="login-wrapper">
          <ToastContainer
            className="ToastContainer"
            position="top-center"
            autoClose={3000}
          />
          <h2 className="login">Login</h2>
          <div className="login-form-group">
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input-field login-input"
              value={values.email || " "}
              onChange={handleChange}
              name="email"
              required
            />
            {errors.email && (
              <b className="login_is-danger for-email">{errors.email}</b>
            )}
            <label className="login-label-password">Password</label>
            <input
              type="password"
              className="login-input-password"
              value={values.password || ""}
              onChange={handleChange}
              name="password"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  Submit();
                }
              }}
              required
            />
            {errors.password && (
              <b className="login_is-danger">{errors.password}</b>
            )}
            <div className="link">
              <a className="login-reset-link" href="/addUser">
                {/* <i>  Reser password</i> */}
              </a>
            </div>
            <button className="login-btn" onClick={Submit}>
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="img-container">
        <div className="img-container1"></div>
      </div>
    </div>
  );
};
export default Login;
