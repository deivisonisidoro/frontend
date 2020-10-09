import React , {Component} from 'react'

import  api from "../../services/api"

import { 
  
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
     <form action="/" method="PUT">

     </form>  
    )
  }
}