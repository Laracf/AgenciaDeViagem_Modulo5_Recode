import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {
    return (

        <nav id="menu" class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-ligth fixed-top border-bottom box-shadow mb-5">
            <div class="container" >
                <a id="menu" class="navbar-brand" href="/">ViajeMais</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button> 
        <Link to="/" id="menu" class="navbar-brand">Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                        <Link to="/Destino" id="menu" class="navbar-brand">Destino</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/Promocao" id="menu" class="navbar-brand">Promoção</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/ClientesCreate" id="menu" class="navbar-brand">Cadastro</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    );
}