import React from "react";
import styled from "styled-components";
import { primerMayuscula } from "../helper";
const ContenedorResumen = styled.div`
    padding:1rem;

    text-align:center;
    background-color: #00838f;
    color:white;
    margin-top:1rem;
`;


const Resumen = ({ datos }) => {
  //extraer

  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;
  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>

      <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
