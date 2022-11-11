import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu, Login } from "./pages";
import {Event} from "./components/Events";
import { Home } from "./pages/Home";
import { UserRegistration } from "./components/UserRegistration";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route exact path="/" element={<Home/>} /> */}
				<Route exact path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/UserRegistration" element={<UserRegistration />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/events" element={<Event/>}/>
				
			</Routes>
		</BrowserRouter>
	);
}


export default App;
