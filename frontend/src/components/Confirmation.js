import React from "react";
import styled from "styled-components";

import tombstone from "../assets/tombstone.png";

const Confirmation = () => {
  return (
    <Wrapper>
      <Text>Your flight is confirmed !</Text>
      <ResNum>Reservation #: </ResNum>
      <FlightNum>Flight #:</FlightNum>
      <SeatNum>Seat #:</SeatNum>
      <Name>Name:</Name>
      <Email>Email:</Email>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 400px;
  /* width: 1000px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  border: solid var(--color-alabama-crimson) 5px;
`;

const Text = styled.h1`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 35px;
  border-bottom: 6px solid var(--color-alabama-crimson);
  padding-bottom: 5px;
`;

const ResNum = styled.h2`
  margin-bottom: 20px;
`;

const FlightNum = styled.h2`
  margin-bottom: 20px;
`;

const SeatNum = styled.h2`
  margin-bottom: 20px;
`;

const Name = styled.h2`
  margin-bottom: 20px;
`;

const Email = styled.h2`
  margin-bottom: 20px;
`;

export default Confirmation;
