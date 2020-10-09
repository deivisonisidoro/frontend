import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 2fr ;
  grid-template-rows: 8vh 10vh 50vh;
  background: #FFFFFF;
  border: 1px solid #F1F2F0;
  padding: 20px;
  margin-bottom: 20px;
  margin: 10px auto 0;
  padding: 0 20px;
`;

export const Titulo= styled.p`
  margin: 10px auto 0;
  padding: 20px;
  font-size: 20px
`

export const Marca = styled.p`
  grid-column-start: 1;
  grid-column-end: 3 ;
  grid-row-start:2;
  grid-row-end: 2;
  color: #AAAFAf;
  
  .titulo{
    color: #364147;
  }
  `
export const Ano = styled.p`
  grid-column-start: 2;
  grid-column-end: 4 ;
  grid-row-start:2;
  grid-row-end: 2;
  color: #AAAFAf;
  
  .titulo{
    color: #364147;
  }
`
export const Descricao = styled.p`
  grid-column-start: 1;
  grid-column-end: 4;
`
export const NomeVeiculo = styled.p`
  
  color: #1D7555;
  font-size: 25px;

`
export const Botao = styled.button`
  max-width: 300px;
  max-height:500px;
  
`
