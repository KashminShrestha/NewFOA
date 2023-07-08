import React, { useState } from 'react'
import { userRegister } from '../api/userApi'
import { Link } from 'react-router-dom';

const Register1 = () => {
    let [name, setUsername] = useState('');
    let [role, setRole] = useState('');
    let [email, setEmail] = useState('');
    let [phoneNo, setPhoneNo] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    let [error, setError] = useState('');
    let [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        userRegister(name, email, password).then((data) => {
            if (data.error) {
                setError(data.error);
                setSuccess(false);
            } else {
                setSuccess(true);
                setError('');
            }
        });
    };

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setRole(selectedRole === 'admin' ? 1 : 0);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>;
        }
    };

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>User Registered Successfully</div>;
        }
    };
    return (
        <>
            {showSuccess()}
            {showError()}

            <div className='parent-container d-flex align-items-center justify-content-center vh-100'>
                <div className='container p-7'>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-4'>
                            <img
                                src='https://knowledgemission.kerala.gov.in/img/official-login.jpg'
                                className='img-fluid'
                                alt='...'
                            />
                        </div>
                        <div className='col-4'>
                            <h1>Fill Registration Form</h1>
                            <br />

                            <form className='' method='post' action='logincheck.jsp'>
                                <div className='mb-4'>
                                    <label htmlFor='exampleInputName' className='form-label'>
                                        Full Name
                                    </label>
                                    <input
                                        type='text'
                                        id='inputFullname'
                                        className='form-control'
                                        placeholder='Full Name'
                                        name='name'
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='exampleInputRole' className='form-label'>
                                        Role
                                    </label>
                                    <select
                                        className='form-control'
                                        id='inputRole'
                                        name='Role'
                                        value={role}
                                        onChange={handleRoleChange}
                                    >
                                        <option value=''>Select Role</option>
                                        <option value='admin'>Admin</option>
                                        <option value='user'>User</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='exampleInputEmail1' className='form-label'>
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        id='inputEmail'
                                        className='form-control'
                                        placeholder='Email address'
                                        name='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='exampleInputPassword1' className='form-label'>
                                        Password
                                    </label>
                                    <div className='input-group'>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id='inputPassword'
                                            className='form-control'
                                            placeholder='Password'
                                            name='Password'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button
                                            className='btn btn-outline-secondary'
                                            type='button'
                                            onClick={handleTogglePassword}
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
                                        </button>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='exampleInputConfirmPassword' className='form-label'>
                                        Confirm Password
                                    </label>
                                    <div className='input-group'>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id='inputConfirmPassword'
                                            className='form-control'
                                            placeholder='Confirm Password'
                                            name='ConfirmPassword'
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <button
                                            className='btn btn-outline-secondary'
                                            type='button'
                                            onClick={handleTogglePassword}
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
                                        </button>
                                    </div>
                                </div>

                                <font color='red'></font>
                                <center>
                                    <button className='btn btn-lg btn-primary btn-block mr-4' type='submit' onClick={handleSubmit}>
                                        Register
                                    </button>
                                    <Link to='/Signin'>
                                        <button className='btn btn-lg btn-primary ml-4 btn-block' type='submit'>
                                            Signin
                                        </button>
                                    </Link>
                                </center>
                            </form>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register1