import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tombstone from "../assets/tombstone.png";

const Confirmation = ({ reservationDetails }) => {
  let navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!reservationDetails) {
  //     navigate("/");
  //   }
  // }, []);

  console.log(reservationDetails);

  return (
    <Wrapper>
      <Text>
        <strong>Your flight is confirmed !</strong>
      </Text>
      <FlightNum>Flight # : {reservationDetails.flight}</FlightNum>
      <SeatNum>Seat # :{reservationDetails.seat}</SeatNum>
      <Name>
        Name :{reservationDetails.givenName} {reservationDetails.surname}
      </Name>
      <Email>Email :{reservationDetails.email}</Email>
      <Logo src={tombstone} />
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

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
export default Confirmation;
