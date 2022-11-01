import React, {useState} from "react";
import { authService } from "fBase";

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