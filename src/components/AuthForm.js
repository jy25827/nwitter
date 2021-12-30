import { authService } from "fbase";
import { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            if (newAccount) {
                // login
                await authService.signInWithEmailAndPassword(
                    email, 
                    password);
            } else {
                // create New Account
                await authService.createUserWithEmailAndPassword(email, password);
            }
        } catch(error) {
            setError(error.message)
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" value={email} 
                onChange={onChange} placeholder="Email" required />
                <input name="password" type="password" value={password} 
                onChange={onChange} placeholder="Password" required />
                <input type="submit" value={newAccount ? "Login" : "Create Account"} />
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Create Account" : "Sign In"}
            </span>
        </>
    );
};

export default AuthForm;