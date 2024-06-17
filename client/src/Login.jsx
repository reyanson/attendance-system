import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Login = () =>{



    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form >
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Username</strong></label>
                        <input
                            type='email'
                            placeholder='Enter Username'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            autoComplete='off'
                            name='password'
                            className='form-control rounded'
                            required
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Log in</button>
                </form>
            </div>

        </div>
    );

}
export default Login;