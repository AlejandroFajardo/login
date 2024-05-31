import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";

export function CrearCuentaEmail() {

  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };  

  return (
		<div className="container" style={{ position: "relative" }}>
			
			{error && <Alert message={error} />}
			<div className="row justify-content-center align-items-center">
				<div className="col-12 text-center">
					<br />
					<br />
					<br />
					<h1>Crear cuenta</h1>
					<br />
					<form
						onSubmit={handleSubmit}
						className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
					>
						<div className="mb-3">
							<div className="label-wrapper">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Email
								</label>
							</div>
							<input
								type="email"
								onChange={(e) => setUser({ ...user, email: e.target.value })}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="youremail@company.tld"
							/>

							<div className="label-wrapper">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Contraseña
								</label>
							</div>
							<input
								type="password"
								onChange={(e) => setUser({ ...user, password: e.target.value })}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="*************"
							/>
						</div>

						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Registrarse
						</button>
					</form>
					<p className="my-4 text-sm flex justify-between px-3">
						Ya tiene una cuenta?
						<Link to="/login" className="text-blue-700 hover:text-blue-900">
							Login
						</Link>
					</p>
				</div>
			</div>
			<div className="row justify-content-center text-center"></div>
		</div>
	);
}
export default CrearCuentaEmail;
