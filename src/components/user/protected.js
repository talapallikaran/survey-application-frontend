import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Protected = (props) => {
    const { Component } = props;
    const userData = useSelector((state) => state.userData.toggle);
   
    const navigate = useNavigate();
    useEffect(() => {
        let login = userData;
        // let login = localStorage.getItem('Email')
        if (!login) {
          navigate('/');
        };
    });
    return (
        <div>
            <Component />
        </div>
    )
};

export default Protected;