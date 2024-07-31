import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { FormularioLogin } from "../component/formulario-login.jsx";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1 className="fw-bold"><i class="fa-solid fa-arrow-turn-right"></i>  Login</h1>
            <FormularioLogin/>
		</div>
	);
};
