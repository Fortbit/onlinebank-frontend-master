import { useState, useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { CheckBalance } from "../components/CheckBalance";
import { FundTransfer } from "../components/FundTransfer";
import { Newfd } from "../components/OpenNewFD";
import {Event} from "../components/Events";

export const Menu = () => {
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
						<FundTransfer />
					</Tab>
					<Tab eventKey="open-new-fd" title="Open New FD">
						<Newfd />
					</Tab>
					<Tab eventKey="events" title="Events">
						<Event />
					</Tab>
					<Tab eventKey="logout" title="Logout">
						<h1>Logout</h1>
					</Tab>
				</Tabs>
			</Container>
		</Container>
	);
};
