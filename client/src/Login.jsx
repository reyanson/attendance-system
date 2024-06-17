import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Login = () =>{
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { username, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Login Successfull") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate('/home');
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Oops...",
                        text: result.data,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "An error occurred",
                    text: "Please try again",
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    }



    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='username'><strong>Username</strong></label>
                        <input
                            type='email'
                            placeholder='Enter Username'
                            autoComplete='off'
                            name='username'
                            onChange={(e) => setUsername(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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