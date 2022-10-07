import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useNavigate } from 'react-router-dom';
import './signIn.css';
import UserFooter from './userFooter/userFooter';
import { useDispatch } from 'react-redux';
import { userData } from '../redux/action';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const Submit = (e) => {
        e.preventDefault()

        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            alert('Please Enter Valid Email like a@gmail.com')
        }
        else {
            dispatch(userData(localStorage.setItem('Email', values.email)));
            dispatch(userData(localStorage.setItem('Password', values.password)));
            dispatch(userData(localStorage.setItem('name', values.name)));
            dispatch(userData({ name: values.name }))
            navigate('/');
        }
    }

    return (
        <div>
            <Header />
            <div className='form-container'>
                <div className='signin-login-wrapper'>
                    <h2>SignIn</h2>
                    <div className='signin-form-group'>
                        <label>Name</label>
                        <input
                            type="text"
                            className='signin-input-field'
                            value={values.name}
                            onChange={handleChange('name')}
                            required
                        />
                        <label>Email</label>
                        <input
                            type="Email"
                            pattern="[^ @]*@[^ @]*"
                            className='signin-input-field'
                            value={values.email}
                            onChange={handleChange('email')}
                            required
                        />
                        <label>Mo.</label>
                        <input
                            type="phone-input"
                            className='signin-input-field'
                            name="phone-input"
                            title="Ten digits code"
                            value={values.number}
                            onChange={handleChange('number')}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            className='signin-input-field'
                            value={values.password}
                            onChange={handleChange('password')}
                            required
                        />
                        <button
                            className='signin-btn'
                            onClick={Submit} disabled={values.name === "" || values.email === "" || values.number === "" || values.password === ""} >SignIn</button>
                    </div>
                </div>
            </div>
            <UserFooter />
        </div>
    );
};
export default SignIn;
