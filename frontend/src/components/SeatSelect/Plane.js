// Plane seating : select a seat

// flight selection + plane + form

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Plane = ({ setReservationDetails }) => {
  let navigate = useNavigate();

  const [seating, setSeating] = useState([]);
  const [seat, setSeat] = useState(null);
  const [flightNum, setFlightNum] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [givenName, setGivenName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);

  // Notes :
  // flight = flights.SA231
  // seating._id

  // get seating data for selected flight :
  // app.get("/flights", getFlights);

  // get flights data
  useEffect(() => {
    const findFlights = async () => {
      const res = await fetch("/flights");
      const data = await res.json();
      // setFlightNum(data.data);
      console.log(data.data);
      setSeating(data.data);
    };
    findFlights();
  }, []);

  // // get a flight data
  // //app.get("/flight/:_id", getFlight);
  // useEffect(() => {
  //   const findSeats = async () => {
  //     if(selectedFlight) {
  //       const res = await fetch(`/flight/${selectedFlight}`);
  //       const data = await res.json();
  //       setReservationDetails(data.data);
  //       setSeating(data.data.seats)

  //     }
  //   }

  // }, []);

  // useEffect(() => {

  // }, []);

  const handleReservation = () => {};

  return (
    <Wrapper>
      {seating && seating.length > 0 ? (
        seating.map((seat) => (
          <SeatWrapper key={`seat-${seat._id}`}>
            <label>
              {seat.isAvailable ? (
                <>
                  <Seat type="radio" name="seat" onChange={() => {}} />
                  <Available>{seat._id}</Available>
                </>
              ) : (
                <Unavailable>{seat._id}</Unavailable>
              )}
            </label>
          </SeatWrapper>
        ))
      ) : (
        <Placeholder>Select a Flight to view seating.</Placeholder>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.ol`
  display: grid;
  grid-template-rows: repeat(10, 30px);
  grid-template-columns: 30px 30px 60px 30px 30px 30px;
  gap: 12px 10px;
  background: #fff;
  border-right: 15px solid var(--color-alabama-crimson);
  border-left: 15px solid var(--color-alabama-crimson);
  /* margin: 24px 24px 0 0; */
  margin-right: 300px;
  padding: 48px 5px;
  height: 500px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

const SeatWrapper = styled.li`
  display: flex;
  font-size: 12px;
  font-weight: 500;
  position: relative;
  height: 30px;
  width: 30px;
`;

const Seat = styled.input`
  opacity: 0;
  position: absolute;
  height: 30px;
  width: 30px;
  margin: 0;

  &:checked {
    span {
      background: var(--color-alabama-crimson);
      color: #fff;
      font-weight: 700;
    }
  }
`;
const SeatNumber = styled.span`
  border-radius: 2px;
  color: var(--color-cadmium-red);
  font-family: var(--font-body);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  transition: all ease 300ms;
`;
const Available = styled(SeatNumber)`
  background: #fff;
  border: 1px solid var(--color-alabama-crimson);
  cursor: pointer;

  &.checked,
  &:hover {
    background: var(--color-alabama-crimson);
    color: #fff;
    font-weight: 700;
  }
`;

const Unavailable = styled(SeatNumber)`
  background: var(--color-selective-yellow);
  cursor: not-allowed;
  opacity: 0.4;
`;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 404px;
  width: 260px;
  text-align: center;
  color: var(--color-orange);
  font-family: var(--font-heading);
  font-size: 32px;
  opacity: 0.5;
`;

export default Plane;

// Notes :
// https://www.w3schools.com/html/html_form_elements.asp
