import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useNavigate } from 'react-router-dom';
import './login.css';
import UserFooter from './userFooter/userFooter';

const Login = () => {
    const navigate = useNavigate();
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
            navigate('/Survey')
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
            <div className='form-container'>
                <div className='login-wrapper'>
                    <h2>Login</h2>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type="email"
                            className='input-field'
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

                        <a className="reset-link" href='/SignIn'>ResetPassword?</a>
                        <button className='login-btn' onClick={Submit}>Login</button>
                    </div>
                </div>
            </div>
            <UserFooter />
        </div>
    );
};
export default Login;
