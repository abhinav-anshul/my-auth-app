import React, { useEffect } from "react"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HomePage, AuthPage, Login, Signup } from "./ui"
const App = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const theUser = localStorage.getItem("user")

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser))
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user?.email ? <Navigate to="/home" /> : <AuthPage />} />
        <Route path="/signup" element={user?.email ? <Navigate to="/home" /> : <Signup />} />
        <Route path="/login" element={user?.email ? <Navigate to="/home" /> : <Login />} />
        <Route
          path="/home"
          element={user?.email ? <HomePage user={user} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
