import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

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

            await API.post("/auth/register", user);

            alert("Registration Successful");

            navigate("/");

        } catch (error) {

            alert("Registration Failed");
        }
    };

    return (
        <div style={{ padding: "30px" }}>
    <h1>Register</h1>

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

    <button type="submit">Register</button>

    </form>

    <br />

    <Link to="/">Already have account? Login</Link>
        </div>
);
}

export default Register;