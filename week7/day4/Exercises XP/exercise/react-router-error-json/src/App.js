import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ErrorBoundary from "./ErrorBoundary";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ShopScreen from "./ShopScreen";
import PostList from "./PostList";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

function App() {
  const sendPost = async () => {
    const res = await fetch("https://webhook.site/your-custom-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      }),
    });
    const data = await res.text();
    console.log("Webhook response:", data);
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
          <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>

        <hr />
        <PostList />
        <Example1 />
        <Example2 />
        <Example3 />

        <button className="btn btn-success mt-3" onClick={sendPost}>Send Data to Webhook</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
