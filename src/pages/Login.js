import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
const [formData, setFormData] = useState({ email: '', password: '' });
const navigate = useNavigate();

const handleChange = (e) =>{
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    });
    if (response.ok) {
    navigate('/');
    } else {
    console.error('Login failed');
    }
    };
    return (
   <div>
   <h2>Login</h2>
   <input />
   <input />
   <button onClick={handleChange}>Login</button>
   </div>
    );
    }
    export default Login;