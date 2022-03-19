import React from "react";

export default class Promocao extends React.Component {

    constructor(props) {
        super(props);
        this.exibirCategoria = this.exibirCategoria.bind(this);
        this.exibirTodos = this.exibirTodos.bind(this);
    }

    exibirCategoria(categoria) {
        let elementos = document.getElementsByClassName('card');

        for ( var i = 0; i < elementos.length; i++) {

            if(categoria === elementos[i].id){
                elementos[i].style = "";
            }
            else {
                elementos[i].style = "display:none";
            } 
        }
    }

    exibirTodos() {
        let elementos = document.getElementsByClassName('card');

        for( var i=0; i < elementos.length; i++ ){
                elementos[i].style = ""; 
        }
    }

    render () {
        return (
        <main>
        <header>
            <br />
            <br />
            <br />
            <h2>Melhores Ofertas Nacionais</h2>
        </header>
        <section id="area_promocao">
            <section className="categorias">
                <h3>Promoções</h3><br />
                <ul>
                    <li onClick={() => this.exibirTodos()}>Todos(12)</li>
                    <li onClick={() => this.exibirCategoria('nordeste')}>Nordeste (3)</li>
                    <li onClick={() => this.exibirCategoria('sudeste')}>Sudeste (2)</li>
                    <li onClick={() => this.exibirCategoria('centroOeste')}>CentroOeste (3)</li>
                    <li onClick={() => this.exibirCategoria('norte')}>Norte (2)</li>
                    <li onClick={() => this.exibirCategoria('sul')}>Sul (2)</li>
                </ul>
            </section>
            <section className="promocoes">
                <div className="card" id="nordeste">
                    <img id="img-promo" src="img\viagem-para-pernambuco-buraco-do-galego.jpg" onclick="destaque(this)" alt="" />
                    <p>Fernando de Noronha</p>
                    <p>R$ 10.389,00</p>
                    <p>R$ 9.019,00</p>
                </div>
                <div className="card" id="nordeste">
                    <img id="img-promo"  src="img\onde-viajar-brasil-praia-dos-carneiros-dezembro.jpg"  onclick="destaque(this)" alt="" />
                    <p>Praia dos Carneiros</p>
                    <p>R$ 1.068,00</p>
                    <p>R$ 910,90</p>
                </div>
                <div className="card" id="nordeste">
                    <img id="img-promo"  src="img/Panorama_de_Maceió.jpg"  onclick="destaque(this)" alt="" />
                    <p>Maceio</p>
                    <p>R$ 2.199,00</p>
                    <p>R$ 1.069,00</p>
                </div>
                <div className="card" id="sudeste">
                    <img id="img-promo"src="img\viagem-arraial-do-cabo.jpg"  onclick="destaque(this)" alt="" />
                    <p>Arraial do Cabo</p>
                    <p>R$ 1.000,00</p>
                    <p>R$ 979,00</p>
                </div>
                <div className="card" id="sudeste">
                    <img id="img-promo"  src="img/buzios2.jpg"  onclick="destaque(this)" alt="" />
                    <p>Búzios</p>
                    <p>R$ 1.600,00</p>
                    <p>R$ 1.519,70</p>
                </div>
                <div className="card" id="centroOeste">
                    <img id="img-promo" src="./img/chapadadosguimaras.jpg"  onclick="destaque(this)" alt="" />
                    <p>Chapada dos Guimarães</p>
                    <p>R$ 580,00</p>
                    <p>R$ 409,88</p>
                </div>
                <div className="card" id="centroOeste">
                    <img id="img-promo" src="img\pirinopolis.jpg"  onclick="destaque(this)" alt="" />
                    <p>Pirinopolis</p>
                    <p>R$ 508,70</p>
                    <p>R$ 464,53</p>
                </div>
                <div className="card" id="centroOeste">
                    <img id="img-promo"  src="img\praiadocerradocaldasnovas.jpg"  onclick="destaque(this)" alt="" />
                    <p>Caldas Novas</p>
                    <p>R$ 459,00</p>
                    <p>R$ 436,05</p>
                </div>
                <div className="card" id="norte">
                    <img id="img-promo"  src="img\alterdochao.jpg" alt="" onclick="destaque(this)" />
                    <p>Alter do Chão</p>
                    <p>R$ 3.500,00</p>
                    <p>R$ 2.799,00</p>
                </div>
                <div className="card" id="norte">
                    <img id="img-promo"  src="img\riobranco.jpg"  onclick="destaque(this)" alt="" />
                    <p>Rio Branco</p>
                    <p>R$ 1.070,50</p>
                    <p>R$ 1.730,61</p>
                </div>
                <div className="card" id="sul">
                    <img id="img-promo"  src="img\trem-curitiba-morretes-serra-verde-express.jpg"  onclick="destaque(this)" alt="" />
                    <p>Curitiba</p>
                    <p>R$ 1.500,00</p>
                    <p>R$ 1.214,10</p>
                </div>
                <div className="card" id="sul">
                    <img id="img-promo" src="\img\florianopolis.jpg" onclick="destaque(this)" alt="" />
                    <p>Florianopolis</p>
                    <p>R$ 2.300,00</p>
                    <p>R$ 2.179,90</p>
                </div>
            </section>
        </section>
    </main>
    );
    }
}

