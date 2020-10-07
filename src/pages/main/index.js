import React , {Component} from 'react'
import  api from "../../services/api"
import { Container, NomeVeiculo, ListaVeiculos, Titulo} from './styles';
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
  render(){
    return(
      <Container>
        <Titulo>VEÍCULO</Titulo>
        <hr/>
        <ListaVeiculos>Lista de veículos</ListaVeiculos>
        {this.state.veiculos.map(veiculos=>(
          <article key={veiculos.id}>
            <strong>{veiculos.marca}</strong>
            <NomeVeiculo>{veiculos.veiculo}</NomeVeiculo>
            <p> {veiculos.ano} </p>
          </article>
        ))}
      </Container>
    )
  }
}