import axios from "axios";
import React from 'react'

const SignupTest = () => {
	const handleClick = (userTest) => {
		axios.post("http://localhost:5000/user", {
			name: "Test"
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