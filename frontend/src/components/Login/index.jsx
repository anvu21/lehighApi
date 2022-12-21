//import { useState } from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
/*	const [data, setData] = useState({ username: "", name: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/_users/login";
			const { data: res } = await axios.post(url, data);
			console.log(res)
			if (res.status ===401){
				setError("Wrong username or password");

			} else{
			localStorage.setItem("token", res._id);
			localStorage.setItem("name", res.name);

			window.location = "/";
			}
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};*/

	return (
		<div className={styles.login_container}>			
			<div className={styles.top}>
				<img src="https://www2.lehigh.edu/sites/www2/files/2019-01/LehighU_official-logo_White.png"  width = "300" alt=""/>
			</div>
			<div className={styles.left}>
				<h1>Login to Your Account</h1>
				<button type="submit" className={styles.green_btn}>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Login;
