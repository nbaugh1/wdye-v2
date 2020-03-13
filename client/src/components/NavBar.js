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
                    <Link to="/"><Button>Home</Button></Link>&nbsp;
                    <Link to="/profile"><Button>Profile</Button></Link>
                </span>
            )}
        </div>
    );
};

export default NavBar;