import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Protected = (props) => {
    const { Component } = props;
    const userData = useSelector((state) => state?.loginUserReducer?.data);
   
    const navigate = useNavigate();
    useEffect(() => {
        let login = (userData?.status === "success") ? "true" : "false";
        // let login = localStorage.getItem('Email')
        if (!login) {
          navigate('/');
        };
    },[userData]);
    return (
        <div>
            <Component />
        </div>
    )
};

export default Protected;