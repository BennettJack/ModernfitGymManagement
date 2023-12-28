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

	return (
		<div>
			<h1>Click</h1>
			<button onClick={handleClick}>Click button</button>
		</div>
	)
}

export default SignupTest;