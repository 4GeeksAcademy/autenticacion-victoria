import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const FormularioSignup = () => {
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()

        if (email == "" || password == "") {
            Swal.fire({
                title: 'Error!',
                text: 'Please, fill out the form completely',
                icon: 'warning',
                iconColor: '#74C7F3',
                confirmButtonColor: '#74C7F3',
                width: '400px',
                confirmButtonText: 'Ok'
              })
        } else {
        let isLogged = actions.login(email, password)
        if (isLogged) {
            navigate("/profile")
        }
    }
}

    return (
    <div className="d-flex justify-content-center align-items-center mt-5" >
        <form style={{width: "50%"}} onSubmit={login}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fw-bolder">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
);
}