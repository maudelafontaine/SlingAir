import React from "react";
import styled from "styled-components";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Profile from "./Profile";
import Reservation from "./Reservation";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<SeatSelect />} />
            <Route path="/confirmed" element={<Confirmation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/view-reservation" element={<Reservation />} />
          </Routes>
        </Router>
        <Footer />
      </Main>
    </>
  );
};

const Main = styled.div`
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  /* height: calc(100vh - 110px); */
  height: 1100px;
`;

export default App;

// <BrowserRouter>
//   <GlobalStyles />
//   <Header />
//   <FlightSelect />
//   <Main>
//     <Switch>
//       <Route exact path="/">
//         <SeatSelect />
//       </Route>
//       <Route exact path="/confirmed">
//         <Confirmation />
//       </Route>
//       <Route path="">404: Oops!</Route>
//       <Route exact path="/profile">
//         <Profile />
//       </Route>
//       <Route exact path="/view-reservation">
//         <Reservation />
//       </Route>
//     </Switch>
//     <Footer />
//   </Main>
// </BrowserRouter>
