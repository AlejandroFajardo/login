import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Login from "./components/Login";
import CrearCuentaEmail from './components/CrearCuenta';


import { AuthProvider } from "./context/AuthContext";

import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => (
	<>
		<div className="bg-slate-300 text-black h-screen flex text-white"></div>
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<CrearCuentaEmail />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	</>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App/>);
