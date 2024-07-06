import React, { useState } from 'react';

const FormularioDeRegistro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const validarSenhas = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert('A senha e a confirmação de senha não coincidem.');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validarSenhas(password, confirmPassword)) {
      return;
    }
    
    const objetoLiteral = {
      username,
      email,
      password,
      confirmPassword,
      endereco,
      telefone
    };
    
    const jsonToSend = JSON.stringify(objetoLiteral);
    
    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id="endereco"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default FormularioDeRegistro;
