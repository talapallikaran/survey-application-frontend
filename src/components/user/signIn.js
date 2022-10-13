import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userData, signInUserAction } from '../../redux/action/action';
import UserFooter from './userFooter/userFooter';


import './signIn.css';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const SignInData = useSelector((state) => state?.signInUserReducer?.data);
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
            const data ={
                name:values.name,
                email:values.email,
                phone: values.number,
                password:values.password
            }
            //dispatch(userData(localStorage.setItem('Email', values.email)));
            //dispatch(userData(localStorage.setItem('Password', values.password)));
            //dispatch(userData(localStorage.setItem('name', values.name)));
            //dispatch(userData({ name: values.name }))
            //navigate('/');
            dispatch(signInUserAction(data))
        }
    };

    return (
        <div>
            <Header />
            <div className='signin-form-container'>
                <div className='signin-wrapper'>
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
                            className='signin-input-field'
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                            onClick={Submit} disabled={values.name === "" || values.email === "" || values.number === "" || values.password === ""}>SignIn</button>
                    </div>
                </div>
            </div>
            <UserFooter />
        </div>
    );
};
export default SignIn;
