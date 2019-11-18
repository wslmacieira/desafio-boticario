import React, { useState, FormEvent } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { Container } from "./styles";

import Footer from '../../components/Footer/Footer';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await api.post("/sessions", {
      email,
      senha
    });
    const { _id } = response.data;
    localStorage.setItem("user", _id);
    props.history.push("/cashback");

  }

  return (
    <Container>
      <div className="card">
        <header>
          <h1>Login</h1>
        </header>
          <form onSubmit={handleSubmit}>
            <div className="group">
              <label>E-MAIL</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Entre com seu email"
              ></input>
              <label>SENHA</label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={event => setSenha(event.target.value)}
                placeholder="Entre com sua senha"
              ></input>
            </div>
            <button type="submit">ENTRAR</button>
            <Link to="/cadastro-usuario">
              <button type="button">CADASTRAR</button>
            </Link>
          </form>
      </div>
      <Footer />
    </Container>
  );
}
