import React, { useState, FormEvent } from "react";
import api from "../../services/api";
import { Container } from "./styles";

import MenuLateral from '../../components/MenuLateral/MenuLateral';

export default function CadastroCompra(props) {
  const [codigo, setCodigo] = useState("");
  const [valor, setValor] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");
    data.append("codigo", codigo);
    data.append("valor", valor);
    data.append("date", date);

    await api.post(
      "/compras",
      { codigo, valor, date },
      {
        headers: { user_id }
      }
    );

    props.history.push("/cashback");
  }

  return (
    <>
      <MenuLateral />
      <Container>
        <div className="card">
          <header>
            <h1>Cadastro Compras</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="group">
              <label>CODIGO</label>
              <input
              
                id="codigo"
                type="string"
                value={codigo}
                onChange={event => setCodigo(event.target.value)}
                placeholder="Codigo da compra"
              ></input>
              <label>VALOR</label>
              <input
                id="valor"
                type="string"
                value={valor}
                onChange={event => setValor(event.target.value)}
                placeholder="Valor da compra"
              ></input>
              <label>DATA</label>
              <input
                id="date"
                value={date}
                onChange={event => setDate(event.target.value)}
                placeholder="Data da compra"
              ></input>
            </div>
            <button type="submit">SALVAR</button>
          </form>
        </div>
      </Container>
    </>
  );
}
