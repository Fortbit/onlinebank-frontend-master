import { useState } from "react";
import { Container } from "react-bootstrap";

const defaultState = {
	name: "",
	middlename: "",
	lastname: "",
	username: "",
	password: "",
	securityQuestionNumber: "",
	securityQuestionAnswer: "",
	accountType: "",
	conformation: false,
};

export const Register = () => {
	const [userData, setUserData] = useState(defaultState);

	const handleChange = (event) => {
		setUserData((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		console.log(userData);

		// submit form api

		setUserData(defaultState);
	};

	return (
		<Container className="p-3">
			Register Here
			<Container className="p-5 mb-4 bg-light rounded-3">
				<form onSubmit={(e) => submitHandler(e)}>
					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="name">
							Your name
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="name"
							name="name"
							placeholder="enter your name"
							onChange={(e) => handleChange(e)}
							value={userData.name}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="middlename">
							Middle Name
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="middlename"
							name="middlename"
							placeholder="enter your middlename"
							onChange={(e) => handleChange(e)}
							value={userData.middlename}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="lastname">
							Last Name
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="lastname"
							name="lastname"
							placeholder="enter your last name"
							onChange={(e) => handleChange(e)}
							value={userData.lastname}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="username">
							User Name
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

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="securityQuestionNumber">
							Security Question
						</label>
						{/* this might be rendered dynamically ?? */}
						<select
							className="form-select"
							aria-label="Question select"
							name="securityQuestionNumber"
							onChange={(e) => handleChange(e)}
							style={{ maxWidth: "80%" }}
						>
							<option value="0">Select Question</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="securityQuestionAnswer">
							Security Answer
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="securityQuestionAnswer"
							name="securityQuestionAnswer"
							placeholder="enter your answer"
							onChange={(e) => handleChange(e)}
							value={userData.securityQuestionAnswer}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="accountType">
							Select AccountType
						</label>
						{/* this might be rendered dynamically ?? */}
						<select
							className="form-select"
							aria-label="Question select"
							name="accountType"
							onChange={(e) => handleChange(e)}
							style={{ maxWidth: "80%" }}
						>
							<option value="0">Select Account Type</option>
							<option value="1">Savings</option>
							<option value="2">Current</option>
							<option value="3">FD</option>
						</select>
					</div>

					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							name="conformation"
							checked={userData.conformation}
							onChange={(e) =>
								setUserData((prev) => {
									return { ...prev, [e.target.name]: e.target.checked };
								})
							}
							id="flexCheckDefault"
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							I agree the terms and conditions
						</label>
					</div>

					<div className="d-flex flex-column">
						<button
							type="button"
							className="btn btn-primary mx-auto"
							onClick={(e) => submitHandler(e)}
						>
							Register
						</button>
					</div>
				</form>
			</Container>
		</Container>
	);
};
