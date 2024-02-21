"use client";
import React, { useState } from 'react';
import './UserLogin.css'
import { FaRegEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const UserLogin = () => {
    const [roleToggle, setRoleToggle] = useState('Student')
    const [passwordToggle, setPasswordToggle] = useState('hide')
    const handleRoleToggle = (event) => {
        setRoleToggle(event);
    }
    const handlePasswordToggle = (e) => {
        setPasswordToggle(e);
    }
    return (
        <div className='px-48 mx-auto py-7'>
            <div className="registration-container container">
                <div className="registration-content">

                    <div className="registration-main">
                        <div className="registration-role">
                            <button onClick={() => handleRoleToggle('Student')} className={`${roleToggle == 'Student' ? 'student-role' : ''}`}>Login Account</button>
                            <button onClick={() => handleRoleToggle('Instructor')} className={`${roleToggle == 'Instructor' ? 'instructor-role' : ''}`}>Register Account</button>
                        </div>
                        <div className={`registration-main-content student-registration ${roleToggle !== 'Student' ? 'hide-student' : ''}`}>
                            <h3 className='font-semibold'>Sign in and start booking</h3>
                            <form action="">
                                <div className='registration-field'>
                                    <input type="email" placeholder='Email' required />
                                </div>
                                <div className='registration-field'>
                                    {
                                        passwordToggle == 'hide' ?
                                            <input type="password" placeholder='Password' required />
                                            :
                                            <input type="text" placeholder='Password' required />
                                    }
                                    {
                                        passwordToggle == 'hide' ? <FaRegEyeSlash onClick={() => handlePasswordToggle('show')} /> : passwordToggle == 'show' ? <FaRegEye onClick={() => handlePasswordToggle('hide')} /> : ''
                                    }
                                </div>
                                <p className='terms-conditions'>By signing up, you agree to our <Link href="">terms</Link> and <Link href="">conditions</Link></p>
                                <button className='signup-btn bg-primary-color hover:bg-primary-color-hover' type="submit">Sign In</button>
                            </form>
                        </div>
                        <div className={`registration-main-content instructor-registration ${roleToggle !== 'Instructor' ? 'hide-instructor' : ''}`}>
                            <h3 className='font-semibold'>Sign up and start booking</h3>
                            <form action="">
                                <div className='registration-field'>
                                    <input type="text" placeholder='Full Name' required />
                                </div>
                                <div className='registration-field'>
                                    <input type="email" placeholder='Email' required />
                                </div>
                                <div className='registration-field'>
                                    {
                                        passwordToggle == 'hide' ?
                                            <input type="password" placeholder='Password' required />
                                            :
                                            <input type="text" placeholder='Password' required />
                                    }
                                    {
                                        passwordToggle == 'hide' ? <FaRegEyeSlash onClick={() => handlePasswordToggle('show')} /> : passwordToggle == 'show' ? <FaRegEye onClick={() => handlePasswordToggle('hide')} /> : ''
                                    }
                                </div>
                                <div className='registration-field'>
                                    {
                                        passwordToggle == 'hide' ?
                                            <input type="password" placeholder='Confirm Password' required />
                                            :
                                            <input type="text" placeholder='Confirm Password' required />
                                    }
                                    {
                                        passwordToggle == 'hide' ? <FaRegEyeSlash onClick={() => handlePasswordToggle('show')} /> : passwordToggle == 'show' ? <FaRegEye onClick={() => handlePasswordToggle('hide')} /> : ''
                                    }
                                </div>
                                <p className='terms-conditions'>By signing up, you agree to our <Link href="">terms</Link> and <Link href="">conditions</Link></p>
                                <button className='signup-btn bg-primary-color hover:bg-primary-color-hover' type="submit">Sign Up</button>
                            </form>
                        </div>

                    </div>
                    <div className="registration-image">
                        <img src="https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?t=st=1708532096~exp=1708535696~hmac=b3a4983a760c284baa3c8034c53a019875845254ba6728f2ca3ebd611ccd846c&w=740" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;