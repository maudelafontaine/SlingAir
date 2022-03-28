// Combines the Plane and Form (user inputs)

import React from "react";
import styled from "styled-components";
import FlightSelect from "./FlightSelect";
import Plane from "./Plane";
import Form from "./Form";

const SeatSelect = ({ setReservationDetails }) => {
  return (
    <Wrapper>
      <FlightSelect />
      <Text>Select your seat and Provide your information!</Text>
      <ToSelect>
        <Plane setReservationDetails={setReservationDetails} />
        <Form />
      </ToSelect>
    </Wrapper>
  );
  // return (
  //   <Wrapper>
  //     <Text>Select your seat and Provide your information!</Text>
  //     <Plane setReservationDetails={setReservationDetails}/>
  //   </Wrapper>
  // )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* height: 2000px; */
`;

const Text = styled.h2`
  margin-bottom: 60px;
  margin-top: 40px;
`;

const ToSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Remplace Information.js pour le moment
// const Form = styled.h2`
//   color: white;
// `;
export default SeatSelect;
