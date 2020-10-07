import React , {Component} from 'react'
import  api from "../../services/api"
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
      <div className="veiculos-list">
        {this.state.veiculos.map(veiculos=>(
          <article key={veiculos.id}>
            <strong>{veiculos.marca}</strong>
            <p>{veiculos.veiculo}</p>
            <p> {veiculos.ano} </p>
          </article>
        ))}
      </div>
    )
  }
}