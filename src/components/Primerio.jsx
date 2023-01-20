import React from "react";

export default () => {
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;

        // Aqui você pode usar essas informações para fazer uma requisição para sua API de autenticação
        // e obter um token de acesso
        // e depois chamar login(token)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}
