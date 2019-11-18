import React, { useState, FormEvent } from "react";
import api from "../../services/api";
import { Container } from "./styles";

import Footer from '../../components/Footer/Footer';

export default function CadastroRevendedor(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData();

    data.append("nome", nome);
    data.append("email", email);
    data.append("cpf", cpf);
    data.append("senha", senha);

    const response = await api.post("/usuario", { email, senha, cpf, nome });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    console.log(email, senha, cpf, nome)

    props.history.push("/listar");
  }

  return (
    <>
      <Container>
        <div className="card">
          <header>
            <h1>Cadastro Revendedor</h1>
          </header>
            <form onSubmit={handleSubmit}>
              <div className="group" >
                <label>NOME COMPLETO</label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={event => setNome(event.target.value)}
                  placeholder="Digite seu nome completo"
                ></input>
                <label>E-MAIL</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Digite seu email"
                ></input>
                <label>CPF</label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={event => setCpf(event.target.value)}
                  placeholder="Digite seu cpf"
                ></input>
                <label>SENHA</label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={event => setSenha(event.target.value)}
                  placeholder="Digite uma senha"
                ></input>
              </div >
              <button type="submit">SALVAR</button>
            </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
