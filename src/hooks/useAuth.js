import { useState } from 'react';

function useAuth(url) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    //   const { data, error, loading, login } = useApiLogin('https://your-api-url.com/login');
    
    async function login(username, password) {
        setLoading(true);
        try {
            const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
            });
            const json = await response.json();
            if (json.token) {
              localStorage.setItem('token', json.token);
              setToken(json.token);
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    

    function logout() {
        localStorage.removeItem('token');
        setToken(null);
    }

    return { token, error, loading, login, logout };
}

export default useAuth