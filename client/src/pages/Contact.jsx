import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {
	const [contact, setContact] = useState({
		username: "",
		email: "",
		message: "",
	});

	const [userData, setUserData] = useState(true);

	const { user } = useAuth();

	if (userData && user) {
		setContact({
			username: user.username,
			email: user.email,
			message: "",
		});

		setUserData(false);
	}

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setContact({
			...contact,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(contact);
	};
	return (
		<>
			<section className="section-contact">
				<div className="contact-content container">
					<h1 className="main-heading">contact us</h1>
				</div>
				<div className="container grid grid-two-cols">
					<div className="contact-img">
						<img src="/images/support.png" alt="we are always ready to help" />
					</div>
					<section className="section-form">
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor="username">username</label>
								<input
									type="text"
									name="username"
									value={contact.username}
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
									value={contact.email}
									onChange={handleInput}
									id="email"
									autoComplete="off"
									required
								/>
							</div>
							<div>
								<label htmlFor="message">message</label>
								<textarea
									name="message"
									id="message"
									value={contact.message}
									onChange={handleInput}
									autoComplete="off"
									required
									cols="30"
									rows="6"></textarea>
							</div>
							<div>
								<button type="submit">submit</button>
							</div>
						</form>
					</section>
				</div>
				<section className="mb-3">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490448696!2d77.30125374670205!3d12.954459543640922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712682851055!5m2!1sen!2sin"
						width="100%"
						height="450"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</section>
			</section>
		</>
	);
};
