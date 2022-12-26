import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from '../../redux/action/Loginuser/loginUserAction';
import { survey } from '../../assets/Img/Img';
import loginFormValidate from './LoginFormValidation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({});
    const [validateData, setValidatedata] = useState(null);

    const LoginData = useSelector((state) => state?.loginUserReducer?.data);
    const RegisterData = useSelector((state) => state?.RegistrationUserReducer?.data);
    //  console.log(LoginData);
    //   console.log(RegisterData);

    let uuid = LoginData && LoginData.uuid

    useEffect(() => {
        if (LoginData?.role_id === 1) {
            navigate('/admin');
            localStorage.setItem("UserRole", "admin");
            window.location.reload();
        }
        
        else if (LoginData?.status === "success") {
            localStorage.setItem('UserRole', "survey")
            navigate('/Survey');
            window.location.reload();
            localStorage.setItem('UUID', uuid);
            localStorage.setItem("WorkerData", JSON.stringify([LoginData?.worker_data]));
            localStorage.setItem("USERIMAGE", LoginData?.profile);
            localStorage.setItem("USERNAME", LoginData?.name);
            localStorage.setItem('ROLLID', LoginData?.role_id);
        }

        else if (RegisterData?.status === "success") {
            toast.success('User Registered Successfully');
        }
        else if (LoginData?.response?.data?.status === "failed") {
            toast.error('Please Enter Valid Data');
        }
    }, [LoginData])

    useEffect(() => {
        let surveyRole = localStorage.getItem('UserRole');
        let adminRole = localStorage.getItem('UserRole');
        if (surveyRole === "survey") {
            navigate('/Survey')
        }
        else if (adminRole === "admin") {
            navigate('/admin');
        }
    })


    const handleChange = (event) => {
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value
        }));
        if (validateData) {
            setErrors(loginFormValidate(values));
        }
    };

    const Submit = (e) => {
        setValidatedata(true);
        e.preventDefault();
        dispatch(loginUserAction(values));
        setErrors(loginFormValidate(values, setValues));
    }

    const formSubmit = event => {
        event.preventDefault();
    };

    return (
        <div>

            <div className='login-form-container'>
                <div className='login-wrapper'>
                    <ToastContainer autoClose={1500} position="top-center" />
                    <h2>Login</h2>
                    <form className='login-form-group' onSubmit={formSubmit}>

                        <label className='loign-form-label'>Email</label>
                        <input
                            type="email"
                            className={`login-input-field ${errors.email && "login-danger1"}`}
                            value={values.email || ""}
                            onChange={handleChange}
                            name='email'
                        />
                        {errors.email && (<b className="login-danger">{errors.email}</b>)}

                        <label className='loign-form-label'>Password</label>
                        <input
                            type="password"
                            className={`login-input-field ${errors.password && "login-danger1"}`}
                            value={values.password || ""}
                            onChange={handleChange}
                            name='password'
                        />
                        {errors.password && (<b className="login-danger">{errors.password}</b>)}

                        <a className="login-resetpassword-link" href='/'>ResetPassword?</a>
                        <a className="login-signin-link" href='/Registration'>Sign up</a>
                        {/* <a className="login-admin-link" href='/admin'>Admin</a> */}

                        <button className='login-button' onClick={Submit}  >Login</button>
                    </form>
                </div>
            </div>
            <div className='login-image-container'>
                <img className="login-page-image" src={survey} alt="image" />
            </div>

        </div>
    );
};
export default Login;