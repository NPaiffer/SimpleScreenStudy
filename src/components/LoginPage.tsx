import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const LoginPage: React.FC = () => {
return (
    <div className="login-container">
        <div className="login-content">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Entrar</button>
            <div className="login-links">
            <Link to="/">Esqueci minha senha</Link>
            <span> | </span>
            <Link to="/cadastro">Cadastrar</Link>
            </div>
        </form>
        </div>
    </div>
);
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
const formData = new FormData(event.currentTarget);
const username = formData.get('username') as string;
const password = formData.get('password') as string;

console.log('Username:', username);
console.log('Password:', password);
}

export default LoginPage;
