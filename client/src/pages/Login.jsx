import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5020/api/auth/login";

export const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const { storeTokenInLS } = useAuth();

	const handleInput = (e) => {
		console.log(e);
		let name = e.target.name;
		let value = e.target.value;
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			console.log("login", response);
			if (response.ok) {
				alert("Login success");
				const res_data = await response.json();
				console.log("resdata", res_data);
				storeTokenInLS(res_data.token);
				setUser({ email: "", password: "" });
				navigate("/");
			} else {
				alert("invalid credential");
				console.log("invalid credential");
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<section>
				<main>
					<div className="section-registration">
						<div className="container grid grid-two-cols">
							<div className="registration-image">
								<img
									src="/images/login.png"
									alt="Lets fill the login field"
									width="500"
									height="500"
								/>
							</div>
							{/*Registration form*/}
							<div className="registration-form">
								<h1 className="main-heading mb-3">Login form</h1>
								<br />
								<form onSubmit={handleSubmit}>
									<div>
										<label htmlFor="email">email</label>
										<input
											type="email"
											name="email"
											placeholder="enter your email"
											id="email"
											required
											autoComplete="off"
											value={user.email}
											onChange={handleInput}
										/>
									</div>

									<div>
										<label htmlFor="password">password</label>
										<input
											type="password"
											name="password"
											placeholder="enter your password"
											id="password"
											required
											autoComplete="off"
											value={user.password}
											onChange={handleInput}
										/>
									</div>
									<br />
									<button type="submit" className="btn btn-submit">
										Register Now{" "}
									</button>
								</form>
							</div>
						</div>
					</div>
				</main>
			</section>
		</>
	);
};
