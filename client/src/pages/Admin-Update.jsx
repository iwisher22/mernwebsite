import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
		phone: "",
	});

	const params = useParams();
	const { authorizationToken } = useAuth();

	const getSingleUserData = async () => {
		try {
			const response = await fetch(
				`http://localhost:5020/api/admin/users/${params.id}`,
				{
					method: "GET",
					headers: {
						Authorization: authorizationToken,
					},
				}
			);

			const data = await response.json();
			console.log(`users single data ${data}`);
			setData(data);
			// if (response.ok) {
			// 	getAllUsersData();
			// }
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleUserData();
	}, []);

	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`http://localhost:5020/api/admin/users/update/${params.id}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						Authorization: authorizationToken,
					},
					body: JSON.stringify(data),
				}
			);
			if (response.ok) {
				toast.success("Updated Successfully");
			} else {
				toast.error("Not updated");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="section-contact">
			<div className="contact-content container">
				<h1 className="main-heading">Update User Data</h1>
			</div>
			<div className="container grid grid-two-cols">
				<section className="section-form">
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="username">username</label>
							<input
								type="text"
								name="username"
								value={data.username}
								onChange={handleInput}
								id="username"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label htmlFor="email">email</label>
							<input
								type="email"
								name="email"
								value={data.email}
								onChange={handleInput}
								id="email"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<label htmlFor="phone">Mobile</label>
							<input
								type="phone"
								name="phone"
								value={data.phone}
								onChange={handleInput}
								id="phone"
								autoComplete="off"
								required
							/>
						</div>
						<div>
							<button type="submit">Update</button>
						</div>
					</form>
				</section>
			</div>
		</section>
	);
};
