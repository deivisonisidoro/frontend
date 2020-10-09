import React , {Component} from 'react'

import  api from "../../services/api"

import { 
  Container,
  NomeVeiculo,
  ListaVeiculos,
  Titulo,
  Marca,
  Veiculo,
  Ano,
  EtiquetaCinza,
  MaisCinza,
  Container2,
  LinkVeiculos
  } from './styles';

  //import {Link} from "react-router-dom"

import Etiqueta from "../../assets/etiquetacinza.png"
import EtiquetaModificada from "../../assets/etiquetaverde.png"
import Mais from "../../assets/iconemais.png"

export default class Main extends Component{
  state = {
    veiculos: [],

  }
  
  componentDidMount(){
    this.loadVeiculos();
  }
  loadVeiculos = async () =>{
    const response = await api.get("/veiculos")
    this.setState({veiculos: response.data})
  }
  loadEtiqueta =async ()=>{
   
    
  }
  render(){
    return(
      <Container>
        
        <Container2>
          <Titulo>VEÍCULO</Titulo>
          
            <MaisCinza src={Mais}/>
          
        </Container2>
        <hr/>
        <ListaVeiculos>Lista de veículos</ListaVeiculos>
        {this.state.veiculos.map(veiculos=>(
            <LinkVeiculos href={`/detalhes/${veiculos.id}`} onClick={this.loadEtiqueta}>
              <Veiculo key={veiculos.id}>
                  <Marca>{veiculos.marca}</Marca>
                  <NomeVeiculo>{veiculos.veiculo}</NomeVeiculo>
                  <Ano> {veiculos.ano} </Ano>
                  
                  <EtiquetaCinza src={Etiqueta}/>
                </Veiculo>
            </LinkVeiculos>
              

        ))}
      </Container>  
    )
  }
}