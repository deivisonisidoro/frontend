import React  from 'react'
import {Container, Formulario, Input} from "./styles"
  
const Search = () =>{
  return(
    <Container>
      <Formulario action="#" method="post">
        <Input type="text" name="Busca" id="Busca" placeholder="Buscar por um veículo"/>
      </Formulario>
    </Container>
  )
  
}

export default Search