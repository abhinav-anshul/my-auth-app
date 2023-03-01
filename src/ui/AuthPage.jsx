import React from "react"
import { Link } from "react-router-dom"

const AuthPage = () => {
  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>Welcome</h1>
      </header>
      <main style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            padding: "0.5rem 1rem",
            borderRadius: "100px",
            backgroundColor: "#0ea5e9",
            color: "white",
            outline: "none",
            border: "none",
          }}
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            border: "1px solid gray",
            padding: "0.5rem 1rem",
            backgroundColor: "whitesmoke",
            color: "#333",
            borderRadius: "100px",
          }}
        >
          Login
        </Link>
      </main>
    </>
  )
}

export default AuthPage
