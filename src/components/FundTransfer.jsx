import { useState } from "react";
import { Container } from "react-bootstrap";

const defaultState = {
	fromAccountNumber: "",
	benificiaryType: "",
	benificiaryAccount: "",
	benificiaryIFSC: "",
	beneficiaryAccountType: "",
	amount: "",
	remarks: "",
	conformation: false,
};

export const FundTransfer = () => {
	const [fundTransferData, setFundTransferData] = useState(defaultState);

	const handleChange = (event) => {
		setFundTransferData((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		console.log(fundTransferData);

		// submit form api

		fundTransferData(defaultState);
	};

	return (
		<Container className="p-3">
			Fund Transfer
			<Container className="p-5 mb-4 bg-light rounded-3">
				<form onSubmit={(e) => submitHandler(e)}>
					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="fromAccountNumber">
							From Account
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="fromAccountNumber"
							name="fromAccountNumber"
							placeholder="enter account number"
							onChange={(e) => handleChange(e)}
							value={fundTransferData.fromAccountNumber}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="benificiaryType">
							Benificiary
						</label>
						{/* this might be rendered dynamically ?? */}
						<select
							className="form-select"
							aria-label="Question select"
							name="benificiaryType"
							onChange={(e) => handleChange(e)}
							style={{ maxWidth: "80%" }}
						>
							<option value="0">Select Baneficiary</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="benificiaryAccount">
							Baneficiary Account
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="benificiaryAccount"
							name="benificiaryAccount"
							placeholder="enter benificiary account number"
							onChange={(e) => handleChange(e)}
							value={fundTransferData.benificiaryAccount}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="benificiaryIFSC">
							Baneficiary IFSC Code
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="benificiaryIFSC"
							name="benificiaryIFSC"
							placeholder="enter benificiary IFSC"
							onChange={(e) => handleChange(e)}
							value={fundTransferData.benificiaryIFSC}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="beneficiaryAccountType">
							Benificiary Account Type
						</label>
						{/* this might be rendered dynamically ?? */}
						<select
							className="form-select"
							aria-label="Question select"
							name="beneficiaryAccountType"
							onChange={(e) => handleChange(e)}
							style={{ maxWidth: "80%" }}
						>
							<option value="0">Select Account Type</option>
							<option value="1">Savings</option>
							<option value="2">Current</option>
							<option value="3">FD</option>
						</select>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="amount">
							Amount
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="amount"
							name="amount"
							placeholder="enter amount"
							onChange={(e) => handleChange(e)}
							value={fundTransferData.amount}
						/>
					</div>

					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="remarks">
							Remarks
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="remarks"
							name="remarks"
							placeholder="enter remarks"
							onChange={(e) => handleChange(e)}
							value={fundTransferData.remarks}
						/>
					</div>

					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							name="conformation"
							checked={fundTransferData.conformation}
							onChange={(e) =>
								setFundTransferData((prev) => {
									return { ...prev, [e.target.name]: e.target.checked };
								})
							}
							id="flexCheckDefault"
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							I have read and accepted the terms and conditions
						</label>
					</div>

					<div className="d-flex flex-column">
						<button
							type="button"
							className="btn btn-primary mx-auto"
							onClick={(e) => submitHandler(e)}
						>
							Transfer
						</button>
					</div>
				</form>
			</Container>
		</Container>
	);
};
