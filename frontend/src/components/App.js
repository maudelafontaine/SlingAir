import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Profile from "./Profile";
import Reservations from "./Reservations";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const [reservationDetails, setReservationDetails] = React.useState("");

  const reservation = (value) => {
    setReservationDetails(value);
  };

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <SeatSelect
                  setReservationDetails={setReservationDetails}
                  reservation={reservation}
                />
              }
            />
            <Route
              path="/confirmed"
              element={<Confirmation reservationDetails={reservationDetails} />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/view-reservation"
              element={<Reservations reservationDetails={reservationDetails} />}
            />
            <Route path="">404: Oops!</Route>
          </Routes>
          <Footer />
        </Main>
      </Router>
    </>
  );
};

const Main = styled.div`
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  /* height: calc(100vh - 110px); */
  height: 100%;
`;

export default App;
