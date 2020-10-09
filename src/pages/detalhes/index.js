import React, {Component} from "react"
import {
  Container,
  Titulo, 
  NomeVeiculo, 
  Marca,
  Ano, 
  Descricao,
  Botao} from "./styles" 

import  api from "../../services/api"
import { matchRoutes, useNavigate, useParams,withRouter,useMatch,} from "react-router-dom"

export default class DetalhesVeiculos extends Component{
  state = {
    veiculos: {},
   
  }
  
  async componentDidMount(){
    
    // const {id} = matchRoutes(this.state.veiculos)
    const response = await api.get(`/veiculos/${6}`)
    this.setState({veiculos: response.data})
    console.log(response)
  }

  render(){
    const {veiculos} = this.state
    return(
      <> 
        <Titulo>Detalhes</Titulo> 
          <Container> 
            
            <NomeVeiculo>{veiculos.veiculo}</NomeVeiculo>
           
            <Marca><p className="titulo">Marca</p> {veiculos.marca}</Marca>
            
            <Ano><p className="titulo">Ano</p> {veiculos.ano} </Ano>
            <Descricao>{veiculos.descricao}</Descricao>
            <a href='/'>editar</a>
          </Container>
      </>
    )
  }
}