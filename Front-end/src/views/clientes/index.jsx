import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Index() {
  const [clientes, setClientes] = useState([]);

  const getAllClientes = () => {
    ClienteService.getAllClientes()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllClientes();
  }, []);

  const deleteCliente = (clienteId) => {
    ClienteService.deleteCliente(clienteId)
      .then((response) => {
        getAllClientes();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <body>

       <img class="d-block w-100 mb-5" src="img\aviaodecolando.png"  alt="Aviao Decolando"/>
      <header className="header">
            <br />
            <br />
            <br />
        <h1 className="container">Cadastro Cliente</h1>
      </header>
      <div className="container p-5">
        <Link to="/ClientesCreate" className="btn btn-primary mb-2">
          Cadastrar
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>DataIda</th>
                <th>DataVolta</th>
                <th>Destino</th>
                <th>ValorCompra</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id_cliente}>
                  <td>{cliente.id_cliente}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.dataIda}</td>
                  <td>{cliente.dataVolta}</td>
                  <td>{cliente.destino}</td>
                  <td>{cliente.valorCompra}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Clientes-Update/${cliente.id_cliente}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCliente(cliente.id_cliente)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}