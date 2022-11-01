import React, { useState } from "react";
import { authService, firebaseInstance } from "fBase";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email"){
            setEmail(value);
        }else if (name === "password"){
            setPassword(value);
        } 
    };

    const LogIn = async(event) => {
      event.preventDefault();
        try{
            const data = await authService.signInWithEmailAndPassword(email,password);
            console.log(data);
        } catch(error){
            setError(error.message);
        }
    };

    // const navigate = useNavigate();
    // const goSingUp = () => {
    //   navigate("/SignUp");
    // };
    
    const onSocialClick = async (event) => {
      const {
        target: { name },
      } = event;
      let provider;
      if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } 
      const data = await authService.signInWithPopup(provider);
      console.log(data);
    };

    return (
        <div>
            <form onSubmit={LogIn}>
                <input 
                    name="email"
                    type="email"  
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={onChange}
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password" 
                    required
                    value={password} 
                    onChange={onChange}
                />
                <input
                  type="submit"
                  value={newAccount ? "로그인" : "Log In"}
                 />
                {error}
            </form>
          <button name = "SignUp"> 
            <Link to= "/SignUp">회원가입</Link>
            
          </button>
          <button onClick={onSocialClick} name="google">
            Google로 로그인
          </button>
        </div>

  );
};
export default Auth;
