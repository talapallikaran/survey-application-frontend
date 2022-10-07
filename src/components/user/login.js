import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useNavigate } from 'react-router-dom';
import UserFooter from './userFooter/userFooter';
import { survey } from '../Img/Img';
import './login.css';
import { useDispatch } from 'react-redux';
import { toggle } from "../redux/action";

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
            console.log("localData--------", localStorage.getItem('Email'));
        } else if (values.email === localStorage.getItem('Email') && values.password === localStorage.getItem('Password')) {
            navigate('/Survey');
            dispatch(toggle())
        }
        else {
            alert("Data is not match Please SignIn")
            setValues({
                email: '',
                password: '',
            })
        }
    }

    return (
        <div>
            <Header />
            <div className='form-container'>
                <div className='login-container'>
                    <div className='login-wrapper'>
                        <h2>Login</h2>
                        <div className='form-group'>
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
                                className='login-input-field'
                                value={values.password}
                                onChange={handleChange('password')}
                                required /><br />

                            <a className="reset-link" href='/SignIn'>Sign In</a>
                            <button className='login-btn' onClick={Submit} disabled={values.email === "" || values.password === ""} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-container'>
                <img className="surveyImg " src={survey} alt="hello" />
            </div>
            <UserFooter />
        </div>
    );
};
export default Login;
