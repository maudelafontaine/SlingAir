// Combines the Plane and Information

import React from "react";
import styled from "styled-components";
import FlightSelect from "../FlightSelect";
import Plane from "./Plane";
import Information from "./Information";

const SeatSelect = ({}) => {
  return (
    <Wrapper>
      <FlightSelect />
      <Text>Select your seat and Provide your information!</Text>
      <ToSelect>
        <Plane />
        <Information />
        <Form>Form</Form>
      </ToSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
const Form = styled.h2`
  color: white;
`;
export default SeatSelect;
