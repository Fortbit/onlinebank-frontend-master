//import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu, Login, Register } from "./pages";
import Event from "./components/Events";
import { Newfd } from "./components/OpenNewFD";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route exact path="/" element={<Home/>} /> */}
				<Route exact path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/events" element={<Event/>}/>
				<Route path="/fixeddeposits" element={<Newfd/>}/>
			</Routes>
		</BrowserRouter>
	);
}


export default App;
