// Select a flight : dropdown component

import React from "react";
import styled from "styled-components";

const FlightSelect = () => {
  return (
    <Wrapper>
      <Text>Flight number : </Text>
      {/* <datalist>
        <option value="SA231">SA231</option>
      </datalist> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
`;

const Text = styled.h1`
  font-size: 40px;
  color: pink;
  margin-top: 20px;
`;

// const Dropdown = styled.input``;

export default FlightSelect;

// Ressource :
// https://stackoverflow.com/questions/45167565/does-react-js-support-html5-datalist
