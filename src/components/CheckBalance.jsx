import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const initialState = {
	name: "",
	currentBalance: "",
	transactionDetails: [
		{
			id: "1",
			date: "12/12/2018",
			type: "savings",
			amount: "2000",
		},
		{
			id: "2",
			date: "12/12/2018",
			type: "savings",
			amount: "2000",
		},
		{
			id: "3",
			date: "12/12/2018",
			type: "savings",
			amount: "2000",
		},
		{
			id: "4",
			date: "12/12/2018",
			type: "savings",
			amount: "2000",
		},
		{
			id: "5",
			date: "12/12/2018",
			type: "savings",
			amount: "2000",
		},
		{
			id: "6",
			date: "12/12/2018",
			type: "savings",
			amount: "2000",
		},
		{
			id: "7",
			date: "12/12/2018",
			type: "savings",
			amount: "2000",
		},
	],
};

export const CheckBalance = () => {
	const [userDetails, setUserDetails] = useState(initialState);

	useEffect(() => {
		// get the user details from a api hit and set the user details
	}, []);

	return (
		<Container className="p-3">
			<Container className="p-3">
				Account Details
				<Container className="p-3 mb-1 bg-light rounded-3">
					<div className="d-flex justify-content-around">
						<div className="mb-3 d-flex flex-column align-items-start justify-content-start">
							<label className="form-label" htmlFor="name">
								Name :
							</label>

							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								placeholder={userDetails.name}
								disabled
							/>
						</div>
						<div className="mb-3 d-flex flex-column align-items-start justify-content-start">
							<label className="form-label" htmlFor="name">
								Current Balance :
							</label>

							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								disabled
								placeholder={userDetails.currentBalance}
							/>
						</div>
					</div>
				</Container>
			</Container>
			<Container className="p-3">
				Transaction Details
				<Container className="p-5 mb-4 bg-light rounded-3"></Container>
			</Container>
		</Container>
	);
};
