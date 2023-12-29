import axios from "axios";
import React from 'react'

const SignupTest = () => {
	const handleClick = (userTest) => {
		axios.post("http://localhost:5000/user", {
			FirstName: "TestFirst",
			LastName: "TestSecond",
			Username: "TestUname",
			Password: "TestPass",
			Pin: 1234,
			Email: "Test@testemail.com",
			Location: "TestLocation"
		})
	}

	function handleClick2 () {
		const username = "s"
		const password = "f"
		axios.post("http://localhost:5000/validateLogin", { username, password })
			.then(res => {
				console.log(res)
			})
	}

	return (
		<div>
			<h1>Click</h1>
			<button onClick={handleClick}>Click button</button>
			<button onClick={handleClick2}>Click 2</button>
		</div>
	)
}

export default SignupTest;