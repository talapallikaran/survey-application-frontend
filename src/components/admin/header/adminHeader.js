import React from "react";
import { logo } from "../../../assets/img/Img";
import "./adminHeader.css";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const back = () => {
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
        <p className="admin-log-out" onClick={back}>
          <IoIosLogOut className="log-out_logo" />
        </p>
      </div>
    </div>
  );
};
export default AdminHeader;
