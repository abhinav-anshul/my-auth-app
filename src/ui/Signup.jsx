import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const Signup = () => {
  const { handleGoogle, loading, error } = useFetch("http://localhost:5152/signup")

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      })
      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        theme: "filled_black",
        text: "continue_with",
        shape: "pill",
      })
    }
  }, [handleGoogle])

  return (
    <>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Back to Authentication Page</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Register to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
        {loading ? <div>Loading...</div> : <div id="signUpDiv" data-text="signup_with"></div>}
      </main>
    </>
  )
}

export default Signup
