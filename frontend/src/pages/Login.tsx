import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        try {

            const response = await API.post("/auth/login", user);

            localStorage.setItem("token", response.data);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Credentials");
        }
    };

    return (
        <div style={{ padding: "30px" }}>

    <h1>Login</h1>

    <form onSubmit={handleSubmit}>

    <input
        type="email"
    name="email"
    placeholder="Enter Email"
    onChange={handleChange}
    />

    <br /><br />

    <input
        type="password"
    name="password"
    placeholder="Enter Password"
    onChange={handleChange}
    />

    <br /><br />

    <button type="submit">Login</button>

    </form>

    <br />

    <Link to="/register">Create New Account</Link>

    </div>
);
}

export default Login;