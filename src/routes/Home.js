import React, {useState} from "react";
import { authService } from "fBase";
import { useHistory } from "react-router-dom";

 const Home = () => {
    const onLogOutClick =() => {
        authService.signOut()
    }
    return (
        <>
            <button onClick={onLogOutClick}>
                Logout
            </button>
        </>
    );
};

 export default Home;