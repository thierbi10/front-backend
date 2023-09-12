import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    //
    axios
      .post("http://127.0.0.1:5000/auth/login", {
        username,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          // Rediriger vers la page "home" en passant le username dans la query string
          setUserName(result.data.username)
          console.log(username);
          navigate("/home?username=" + result.data.username);
        } else {
          alert("Authentication failed");
        }
      })
      .catch((e) => {
        alert("wrong details");
        console.log(e);
      });
  }
  return (
    <div className=" container border p-1 m-2">
      <div className="login   d-flex justify-content-center align-items-center   ">
        <h1>Login</h1>

        <form action="POST">
          <div>
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="usernam"
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

          <input type="submit" onClick={submit} />
        </form>

        <br />
        <p>OR</p>
        <br />

        {/* <Link to="/signup">Signup Page</Link> */}
      </div>
    </div>
  );
}
