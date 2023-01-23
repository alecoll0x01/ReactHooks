import { React, useState } from "react";
import useAuth from "../hooks/useAuth";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { data, error, loading, login } = useAuth('https://your-api-url.com/login');

    function handleSubmit(e) {
        e.preventDefault();
        login(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                Login
            </button>
            {error && <div>{error.message}</div>}
            {data && <div>{data.message}</div>}
        </form>
    );
}

export default LoginForm