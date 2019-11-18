import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Container, Total } from "./styles";
import { Compra } from '../../models/Compra';

import MenuLateral from '../../components/MenuLateral/MenuLateral';

export default function Cashback() {
  const [compras, setCompras] = useState<Array<Compra>>([]);
  const [totalCashback, setTotalCashback] = useState(0)

  useEffect(() => {
    async function loadCompras() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/listar", {
        headers: { user_id }
      });

      const data = response.data.map(compras => ({
        ...compras,

      }));

      setCompras(data);

      const compraAprovada = data.filter(function (compra) {
        return compra.status === 'APROVADO';
      });

      const compraValores = compraAprovada.map(function (cash) {
        return cash.valor;
      });

      const totalValores = compraValores.reduce(function (acc, total) {
        return parseInt(acc) + parseInt(total);
      }, 0);

      setTotalCashback(totalValores)
    }

    loadCompras();

  }, []);

  function removeCompra(_id) {
    api.delete(`/compras/${_id}`);
  }

  return (
    <>
      <Container >
        {compras.length < 0 ? (
          <h2> Sem compras cadastradas! </h2>
        ) : (
            <h1>Lista de Compras</h1>
          )
        }
        <table>
          <thead>
            <tr className="thead">
              <th scope="col">Codigo</th>
              <th scope="col">Status</th>
              <th scope="col">Valor</th>
              <th scope="col">Cashback</th>
              <th scope="col">Data</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>

          {compras.map((compra) => (
            <tbody key={compra._id}>
              <tr className="tbody" >
                <td data-label="Codigo">{compra.codigo}</td>
                <td data-label="Status">{compra.status}</td>
                <td data-label="Valor">{compra.valor}</td>
                <td data-label="Cashback">{compra.cashback = ((15 / 100) * compra.valor)}</td>
                <td data-label="Data">{compra.date}</td>
                <td data-label="Ações">
                  {compra.status === "VALIDAÇÃO" ? (
                    <>
                      <a href="/listar-compra" onClick={() => removeCompra(compra._id)}>
                        <FaRegTrashAlt color="red" />
                      </a>
                      <a href={`/compras/${compra._id}`}>
                        <FaEdit color="green" />
                      </a>
                    </>
                  ) : (
                      null
                    )}{" "}
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <Total>
          <Link to="/cadastro-compra">
            <button type="button">NOVO</button>
          </Link>
          <strong>
            CASHBACK <span>R$: {totalCashback}</span>
          </strong>
        </Total>
      </Container >
      <MenuLateral />
    </>
  );
}

