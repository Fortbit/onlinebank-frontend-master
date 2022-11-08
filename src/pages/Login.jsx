import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import loginservice from "../service/loginservice";

const defaultState = {
	username: "",
	password: "",
};

export const Login = () => {
	const [userData, setUserData] = useState(defaultState);

	const handleChange = (event) => {
		setUserData((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// submit form api

		setUserData(defaultState);
	};

	return (
		<Container className="p-3">
			Login Here
			<Container className="p-5 mb-4 bg-light rounded-3">
				<form onSubmit={(e) => submitHandler(e)}>
					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="username">
							Username
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="username"
							name="username"
							placeholder="enter your username"
							onChange={(e) => handleChange(e)}
							value={userData.username}
						/>
					</div>
					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="password">
							Password
						</label>

						<input
							type="password"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="password"
							name="password"
							placeholder="enter your password"
							onChange={(e) => handleChange(e)}
							value={userData.password}
						/>
					</div>
					<div className="d-flex flex-column">
						<button
							type="button"
							className="btn btn-primary mx-auto"
							onClick={(e) => submitHandler(e)}
						>
							SignIn
						</button>
						<button type="button" className="btn btn-link mx-auto">
							<Link to="/register"> New User ? Signup </Link>
						</button>
					</div>
				</form>
			</Container>
		</Container>
	);
};
