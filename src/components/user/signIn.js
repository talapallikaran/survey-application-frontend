import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userData } from '../../redux/action/action';

import './signIn.css';

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
    };

    return (
        <div>
            <Header />
            <div className='form-container'>
                <div className='login-wrapper'>
                    <h2>SignIn</h2>
                    <div className='form-group'>
                        <label>Name</label>
                        <input
                            type="text"
                            className='input-field'
                            value={values.name}
                            onChange={handleChange('name')}
                            required

                        />
                        <label>Email</label>
                        <input
                            type="Email"
                            pattern="[^ @]*@[^ @]*"
                            className='input-field'
                            value={values.email}
                            onChange={handleChange('email')}
                            required

                        />
                        <label>Mo.</label>
                        <input
                            className='input-field'
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='Eg : 900 000 520'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={values.number}
                            onChange={handleChange('number')}
                            required

                        />

                        <label>Password</label>
                        <input
                            type="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            required

                        />
                        <button
                            className='login-btn'
                            onClick={Submit} disabled={values.name === "" || values.email === "" || values.number === "" || values.password === ""}>SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignIn;
