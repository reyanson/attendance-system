import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Home = () => {

    const [message, setMessage] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3001/home")
            .then(res => {
                if (res.data.valid) {
                    setMessage(res.data.message)
                } else {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout")
            .then(() => {
                let timerInterval;
                Swal.fire({
                title: "Logging out",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    navigate("/")
                }
                });
                
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>{message}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Home
