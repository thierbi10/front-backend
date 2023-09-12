import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get("username");

    return (
        <div className="homepage">



            <div className="para">Hello <span>{username && <p> {username}</p>} </span>and welcome to the home</div>

        </div>
    )
}

export default Home