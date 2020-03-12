import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <Button onClick={() => loginWithRedirect({})}>Log in</Button>
            )}

            {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}

            {isAuthenticated && (
                <span>
                    <Button><Link to="/">Home</Link>&nbsp;</Button>
                    <Button><Link to="/profile">Profile</Link></Button>
                </span>
            )}
        </div>
    );
};

export default NavBar;