import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const handleSignoff = () => {
		actions.signOff()
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Back to Home</span>
				</Link>
				<div className="ml-auto">
					{store.auth ?
						<Link to="/">
						<button onClick={handleSignoff} className="btn btn-primary">Cerrar sesión</button>
					</Link> : null
					}
				</div>
			</div>
		</nav>
	);
};
