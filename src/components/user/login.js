import React, { useEffect, useState } from 'react';
import Header from './headerLogin/header';
import { useNavigate } from 'react-router-dom';
import './login.css';
import UserFooter from './userFooter/userFooter';
import { useDispatch, useSelector } from "react-redux";
import { toggle, loginUserAction} from '../../redux/action/action';
import { survey } from '../Img/Img';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const LoginData = useSelector((state) => state?.loginUserReducer?.data)

    useEffect(() => {
        if(LoginData?.status === "success"){
            navigate('/Survey')
        }
    },[LoginData])

    let uuid = LoginData && LoginData.uuid

    if (typeof window !== 'undefined') {
        localStorage.setItem('UUID' , uuid)
    }

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const Submit = (e) => {
        e.preventDefault()
        dispatch(loginUserAction(values));
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