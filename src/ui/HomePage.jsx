import React from "react"

const HomePage = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user")
    window.location.reload()
  }
  return (
    <>
      <main>
        <div style={{ textAlign: "right", margin: "2rem" }}>
          <img
            alt="logo"
            src={user.picture}
            width="45px"
            height="45px"
            style={{ borderRadius: "100px" }}
          />
        </div>
        <div style={{ textAlign: "center", margin: "3rem" }}>
          <h1>Hello {user?.firstName}!</h1>
          <div>
            <button
              onClick={logout}
              style={{
                border: "1px solid gray",
                backgroundColor: "white",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                borderRadius: "100px",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
