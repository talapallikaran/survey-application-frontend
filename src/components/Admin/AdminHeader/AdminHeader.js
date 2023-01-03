import React, { useEffect } from "react";
import { logo } from "../../../assets/Img/Img";
import "./AdminHeader.css";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const RegisterData = useSelector(
    (state) => state?.RegistrationUserReducer?.data
  );
  const editData = useSelector((state) => state?.putUserEditDataReducer?.data);

  useEffect(() => {
    if (RegisterData?.status === "success") {
      toast.success("User Add Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  }, [RegisterData]);

  useEffect(() => {
    if (editData?.status === "success") {
      toast.success("User Edited Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  }, [editData]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="admin-header-main">
      <div className="admin-header-warpper">
        <img className="admin-header-img" src={logo} alt="Hello" />
        <h2 className="admin-title">Survey</h2>
      </div>
      <div>
        <p className="admin-log-out" onClick={logout}>
          <IoIosLogOut className="log-out_logo" />
        </p>
      </div>
    </div>
  );
};
export default Header;
