import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useNavigate } from 'react-router-dom';
import './login.css';
import UserFooter from './userFooter/userFooter';
import { useDispatch } from "react-redux";
import { toggle } from '../../redux/action/action';
import { survey } from '../Img/Img';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const Submit = (e) => {
        e.preventDefault()
        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            alert('Please Enter Valid Email like a@gmail.com')
        } else if (values.email === localStorage.getItem("Email") && values.password === localStorage.getItem("Password")) {
            navigate('/Survey')
            dispatch(toggle())
        }
        else {
            alert("Data is not match please SignIn")
            setValues({
                email: '',
                password: '',
            })
        }
    }

    return (
        <div>
            <Header />
            <div className='login-form-container'>
                <div className='login-wrapper'>
                    <h2>Login</h2>
                    <div className='login-form-group'>
                        <label>Email</label>
                        <input
                            type="email"
                            className='login-input-field'
                            value={values.email}
                            onChange={handleChange('email')}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            required />

                        <a className="login-reset-link" href='/SignIn'>Reset password?</a>
                        <button className='login-btn' onClick={Submit} disabled={values.email === "" || values.password === ""} >Login</button>
                    </div>
                </div>
            </div>
            <div className='img-container'>
                <img className="surveyImg " src={survey} alt="hello"/>
            </div>
            <UserFooter />
        </div>
    );
};
export default Login;
