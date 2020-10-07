import React from 'react';

import { Container, Titulo,Imagem} from './styles';
import Gota from "../../assets/gota.png"
import Search from "../Search/index"

const Header = () => {
  return (
    <Container>
      <Imagem src={Gota}/>
      <Titulo>FULLSTACK</Titulo>
      <Search/>
    </Container>
  )
}

export default Header;