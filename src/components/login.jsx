import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";


export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
		try {
			await loginWithGoogle();
			navigate("/");
		} catch (error) {
			setError(error.message);
		}
	};

  return (
		<div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
			

			<div className="row justify-content-center align-items-center">
				{error && <Alert message={error} />}
				<div className="col-12 text-center">
					<br />
					<br />
					<br />
					<h1>Ingresar</h1>
					<br />
					<form
						onSubmit={handleSubmit}
						className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
					>
						<div className="mb-3">
							<div className="label-wrapper">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Usuario
								</label>
							</div>
							<input
								type="email"
								name="email"
								id="email"
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="youremail@company.tld"
							/>
						</div>

						<div className="mb-3">
							<div className="label-wrapper">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Contraseña
								</label>
							</div>
							<input
								type="password"
								name="password"
								id="password"
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="*************"
							/>
						</div>

						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Ingresar
							</button>
						</div>
					</form>
					<br />
					<button
						onClick={handleGoogleSignin}
						className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
					>
						Google login
					</button>
					<p className="my-4 text-sm flex justify-between px-3">
						No tiene una cuenta?
						<Link to="/register" className="text-blue-700 hover:text-blue-900">
							Registrarse
						</Link>
					</p>
				</div>
			</div>
			<div className="row justify-content-center text-center"></div>
		</div>
	);
}

export default Login;
