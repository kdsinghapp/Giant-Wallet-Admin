import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../public/assets/img/logo.png";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await login({ email, password });
		if (result.success) {
			navigate("/dashboard");
		} else {
			alert(result.message || "Login failed");
		}
	};

	return (
		<div className="login-30 tab-box">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6  bg-img">
						<div id="bg"></div>
					</div>
					<div className="col-lg-6 col-md-12 form-section">
						<div className="login-inner-form">
							<div className="details">
								<center>
									<img src={logo} alt="Logo" style={{ width: "100px" }} />
								</center>
								<h3 className="mb-3 mt-2">Sign Into Admin Panel</h3>
								<form onSubmit={handleSubmit}>
									<div className="form-group">
										<label htmlFor="first_field" className="form-label float-start">
											Email address
										</label>
										<input
											name="email"
											type="email"
											className="form-control"
											id="first_field"
											placeholder="Email Address"
											aria-label="Email Address"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
									</div>
									<div className="form-group clearfix">
										<label htmlFor="second_field" className="form-label float-start">
											Password
										</label>
										<input
											name="password"
											type="password"
											className="form-control"
											autoComplete="off"
											id="second_field"
											placeholder="Password"
											aria-label="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
										/>
									</div>
									<div className="checkbox form-group clearfix">
										<div className="form-check float-start">
											<input
												className="form-check-input"
												type="checkbox"
												id="rememberme"
												checked={rememberMe}
												onChange={(e) => setRememberMe(e.target.checked)}
											/>
											<label className="form-check-label" htmlFor="rememberme">
												Remember me
											</label>
										</div>
									</div>
									<div className="form-group clearfix">
										<button type="submit" className="btn btn-lg btn-primary btn-theme">
											<span>Login</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
