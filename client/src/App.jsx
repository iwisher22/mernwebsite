import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Service } from "./pages/Service.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Error } from "./pages/Error.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Logout } from "./pages/Logout.jsx";
import { AdminLayout } from "./components/layouts/Admin-Layout.jsx";
import { AdminUsers } from "./pages/Admin-Users.jsx";
import { AdminContacts } from "./pages/Admin-Contacts.jsx";
import { AdminUpdate } from "./pages/Admin-Update.jsx";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/service" element={<Service />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="*" element={<Error />} />
					<Route path="/admin" element={<AdminLayout />}>
						<Route path="users" element={<AdminUsers />} />
						<Route path="contacts" element={<AdminContacts />} />
						<Route path="users/:id/edit" element={<AdminUpdate />} />
					</Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
