import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.getPrivate()
	})
	return (
		<div>
		<h2 className="text-center">Welcome to the virtual library</h2>
		<div className="row text-center m-5 d-flex justify-content-between">
			<div class="card col-sm-6 mb-sm-0" style={{width: "45%"}} >
				<img src="https://i.pinimg.com/564x/3f/3d/3b/3f3d3bcbad7042fb9fe3f358aee6a3d3.jpg" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Log in to your account</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<Link to="/login">
							<button type="button" className="btn btn-success"> <i class="fa-solid fa-right-to-bracket"></i> Login</button>
						</Link>
					</div>
			</div>
			<div class="card col-sm-6 mb-sm-0" style={{width: "45%"}} >
				<img src="https://i.pinimg.com/564x/7d/2c/15/7d2c15ace7612050607ea41b459d569f.jpg" class="card-img-top" style={{height: "245px"}} alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Create an account</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<Link to="/login">
							<button type="button" className="btn btn-success"> <i class="fa-solid fa-user"></i>  Create account</button>
						</Link>
					</div>
			</div>
			</div>
			</div>
	);
};
