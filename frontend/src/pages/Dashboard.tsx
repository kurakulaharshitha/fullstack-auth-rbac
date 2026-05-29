import React from "react";

const Dashboard = () => {

    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "100px",
                color: "white"
            }}
        >
            <h1>Dashboard</h1>

            <h3>Login Successful ✅</h3>

            <p>JWT Token Stored Successfully</p>

            <textarea
                value={token || ""}
                rows={8}
                cols={60}
                readOnly
            />

            <br /><br />

            <button
                onClick={logout}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;