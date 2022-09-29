import React, { useState } from 'react';
import Header from './headerLogin/header';
import { useNavigate } from 'react-router-dom';
import './signIn.css';

const SignIn = () => {
    const navigate = useNavigate();

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
            localStorage.setItem('Email', values.email);
            localStorage.setItem('Password', values.password);
            navigate('/');
        }
    }   

    /* const Submit = (e) => {

        const  { name, email, number, password } = values;

        if (name === " "  || number === "" || email === "" || password === "") { alert("Hello") }
        else {
            e.preventDefault();

            const res = fetch("http://wren.in:3200/api/sign-up/fan", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name, email, number, password
                })
            })
                .then((resp) => {
                    resp.json().then((result) => {
                        console.warn("result", result)
                    })
                })

            if (res) {
                alert("done")
            } else {
                alert('Not Add Data')
            }
        }
    } */

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
                            type="phone-input"
                            className='input-field'
                            name="phone-input"
                            title="Ten digits code"
                            placeholder='Eg : 081 222 2224'
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
                            onClick={Submit} >SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignIn;
