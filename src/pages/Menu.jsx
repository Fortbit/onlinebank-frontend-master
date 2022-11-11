import { useState, useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import  {Fundtransfer}  from "../components/FundTransfer";
import { Newfd } from "../components/OpenNewFD";
import { Atmpin } from "../components/ATMpin";
import {Event} from "../components/Events";
import { Chequebookreq } from "../components/Chequebook";
import {CheckBalance,} from "../components/CheckBalance";
import { Footer } from "../components/Footer";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

export const Menu = () => {
	const navigate = useNavigate();
	const navigateHome = () => {
		navigate('/');
	  };
	return (
		<Container className="p-3">
			Home
			<Container className="p-5 mb-4 bg-light rounded-3">
				<Tabs
					defaultActiveKey="check-balance"
					id="justify-tab-example"
					className="mb-3"
					justify
				>
					<Tab eventKey="check-balance" title="Check-Balance">
						<CheckBalance />
					</Tab>
					<Tab eventKey="fund-transfer" title="Fund Transfer">
						<Fundtransfer />
					</Tab>
					<Tab eventKey="open-new-fd" title="Open New FD">
						<Newfd />
					</Tab>
					<Tab eventKey="request-new-cheque" title="Request Cheque Book">
						<Chequebookreq />
					</Tab>
					<Tab eventKey="change-ATM-pin" title="Change ATM Pin">
						<Atmpin />
					</Tab>
					<Tab eventKey="events" title="Events">
						<Event />
					</Tab>
					<Tab eventKey="logout" title="Logout">
						<h1>Logout</h1>
						<button onClick={navigateHome}>Log Out</button>
						</Tab>

				</Tabs>
			</Container>
			<Footer/>
		</Container>
	);
};
