import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Create() {
    const [nome, setNome] = useState('');
    const [dataIda, setDataIda] = useState('');
    const [dataVolta, setDataVolta] = useState('');
    const [destino, setDestino] = useState('');
    const [valorCompra, setValorCompra] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

  const cadastroCliente = (e) => {
    e.preventDefault();

    const cliente = { nome, dataIda, dataVolta, destino, valorCompra};

    if (id) {
        ClienteService.updateCliente(id, cliente)
        .then((response) => {
            navigate("/Clientes")
        })

    } else {
        ClienteService.createCliente(cliente)
        .then((response) => {
            navigate("/Clientes")
        })
    }
  }

  useEffect(() => {
      function getClienteById() {
        if (id) {
            ClienteService.getClienteById(id)
            .then((response) => {
                setNome(response.data.nome);
                setDataIda(response.data.dataIda);
                setDataVolta(response.data.dataVolta);
                setDestino(response.data.destino);
                setValorCompra(response.data.valorCompra);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getClienteById()
  }, [id]);

  return (

    <body>
        
  <img class="d-block w-100 mb-5" src="img\pordosolfamilia.jpg"  alt="Por do sol"/>
        
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Faça sua Compra"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="DataIda" className="form-label">
              Data de Ida
            </label>
            <input
              type="date"
              id="DataIda"
              className="form-control"
              placeholder="DataIda"
              value={dataIda}
              onChange={(e) => setDataIda(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="DataVolta" className="form-label">
              Data de Volta
            </label>
            <input
              type="date"
              id="DataVolta"
              className="form-control"
              placeholder="DataVolta"
              value={dataVolta}
              onChange={(e) => setDataVolta(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Destino" className="form-label">
              Destino
            </label>
            <input
              type="text"
              id="Destino"
              className="form-control"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ValorCompra" className="form-label">
              Valor da Compra
            </label>
            <input
              type="double"
              id="ValorCompra"
              className="form-control"
              placeholder="ValorCompra"
              value={valorCompra}
              onChange={(e) => setValorCompra(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => cadastroCliente(e)}>
            Enviar
          </button>
          <Link
            to="/Clientes"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
    </body>
  );
}