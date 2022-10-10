import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userData } from '../../redux/action/action';

import './signIn.css';
import UserFooter from './userFooter/userFooter';

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
<<<<<<< HEAD
    }
=======
    };
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897

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
<<<<<<< HEAD
                            type="phone-input"
                            className='signin-input-field'
                            name="phone-input"
                            title="Ten digits code"
=======
                            className='input-field'
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='Eg : 900 000 520'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
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
<<<<<<< HEAD
                            className='signin-btn'
                            onClick={Submit} disabled={values.name === "" || values.email === "" || values.number === "" || values.password === ""} >SignIn</button>
=======
                            className='login-btn'
                            onClick={Submit} disabled={values.name === "" || values.email === "" || values.number === "" || values.password === ""}>SignIn</button>
>>>>>>> cbe9d703bd191bc4494ac59843736a1707229897
                    </div>
                </div>
            </div>
            <UserFooter />
        </div>
    );
};
export default SignIn;
