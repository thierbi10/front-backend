import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Inscription() {
  const navigate = useNavigate(); 

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/auth/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setUserName(res.data.username);
        setEmail(res.data.email);

        // Naviguez vers la page "home" en passant les données d'état
        navigate("/signup");

        console.log(username);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container border p-1 m-2">
      <div className="login d-flex justify-content-center align-items-center">
        <h1>Register</h1>

        <form onSubmit={submit}>
          {" "}
          {/* Utilisez "onSubmit" au lieu de "onClick" */}
          <div>
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Nom"
            />
          </div>
          <div>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </div>
          <button type="submit">Submit</button>{" "}
          {/* Utilisez un bouton "submit" */}
        </form>

        <br />

        <Link to="/signup">Signup Page</Link>
      </div>
    </div>
  );
}
