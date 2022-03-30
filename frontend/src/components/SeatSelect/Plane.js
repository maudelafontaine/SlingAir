// Plane seating : select a seat

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Plane = ({ setReservationDetails, reservation }) => {
  let navigate = useNavigate();

  const flight = "SA231";
  // States :
  // Plane
  const [seating, setSeating] = useState([]);
  const [seat, setSeat] = useState("");

  // Form
  const [givenName, setGivenName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");

  // Get flights data :
  useEffect(() => {
    const findFlights = async () => {
      const res = await fetch("/flights");
      const data = await res.json();
      console.log(data.data);
      setSeating(data.data);
    };
    findFlights();
  }, []);

  // const info = {
  //   flight: flight,
  //   seat: seat,
  //   givenName: givenName,
  //   surname: surname,
  //   email: email,
  // };

  // Post a reservation :
  const handleReservation = async (event) => {
    event.preventDefault();

    let data = {
      flight: flight,
      seat: seat,
      givenName: event.target["first-name"].value,
      surname: event.target["last-name"].value,
      email: event.target["email"].value,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const res = await fetch("/reservation", requestOptions);
    const parseRes = await res.json();
    // setReservationDetails(data.data);
    reservation(data);
    navigate(`/confirmed`);
  };

  if (!seating) {
    return <div>Loading, please wait.</div>;
  }

  return (
    <>
      <SeatsContainer>
        <Text>Select your seat and Provide your information!</Text>
        {seating && seating.length > 0 ? (
          seating.map((seat) => (
            <SeatWrapper key={`seat-${seat._id}`}>
              <label>
                {seat.isAvailable ? (
                  <>
                    <Seat
                      type="radio"
                      name="seat"
                      onChange={() => {
                        setSeat(seat._id);
                        console.log(seat._id);
                      }}
                    />
                    <Available
                      style={
                        seat._id === seat
                          ? {
                              backgroundColor: "var(--color-alabama-crimson)",
                              color: "#fff",
                            }
                          : {}
                      }
                    >
                      {seat._id}
                    </Available>
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
      </SeatsContainer>
      <FormContainer>
        <UserInput onSubmit={handleReservation}>
          <FirstName
            placeholder="First Name"
            name="first-name"
            onChange={(e) => {
              setGivenName(e.target.value);
            }}
          ></FirstName>
          <LastName
            placeholder="Last Name"
            name="last-name"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          ></LastName>
          <Email
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Email>
          <Submit
            type="submit"
            // onClick={handleReservation}
            disabled={!givenName || !surname || !email || !flight || !seat}
            style={{
              opacity:
                !givenName || !surname || !email || !flight || !seat
                  ? 0.5
                  : undefined,
            }}
          >
            Confirm
          </Submit>
        </UserInput>
      </FormContainer>
    </>
  );
};

// Seat container styling :
const SeatsContainer = styled.ol`
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

const Text = styled.h2`
  margin-bottom: 60px;
  margin-top: 40px;
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

// Form styling :

const FormContainer = styled.div`
  display: flex;
`;

const UserInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid var(--color-alabama-crimson) 5px;
`;

const FirstName = styled.input`
  margin: 20px;
`;

const LastName = styled.input`
  margin: 20px;
`;

const Email = styled.input`
  margin: 20px;
`;

const Submit = styled.button`
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
`;

export default Plane;

// Notes :
// https://www.w3schools.com/html/html_form_elements.asp
