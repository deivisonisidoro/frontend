import styled from 'styled-components';


export const ListaVeiculos = styled.p`
  margin: 10px auto 0;
`
export const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto 0;
  padding: 0 20px;

 

`;
export const Veiculo = styled.article`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 3vh 3vh 3vh 3vh;
  background: #FFFFFF;
  border: 1px solid #F1F2F0;
  padding: 20px;
  margin-bottom: 20px;
  margin: 10px auto 0;
  padding: 0 20px;
 
`
export const Titulo = styled.p`
  
  font-size: 20px;

`
export const Marca = styled.strong`
  grid-column-start: 1;
  grid-column-end: 3;

`
export const NomeVeiculo = styled.p`
  color: #1D7555;
  grid-column-start: 1;
  grid-column-end: 2;
  `

export const Ano = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
`


export const EtiquetaCinza = styled.img`
    max-width:30px;
    max-height:25px;
    width: auto;
    height: auto;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start:2;
    grid-row-end: 2;
`
export const MaisCinza = styled.img`
  max-width:30px;
  max-height:25px;
  width: auto;
  height: auto;
`
export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`

export const LinkVeiculos = styled.a`
text-decoration: none ;
color: #364147;
background-image:url(../../assets/etiquetacinza.png);
:hover{
  background-image:url(../../assets/etiquetacinza.png);
}
:visited{
  background-image:url(../../assets/etiquetacinza.png);
}
:link{
  background-image:url(../../assets/etiquetacinza.png);
}

`