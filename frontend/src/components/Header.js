import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineAirplaneTicket } from "react-icons/md";

// import slingairLogo from "../assets/logo_text.png";

const Header = () => {
  const [reservations, setReservations] = React.useState(null);

  // Get reservations
  React.useEffect(() => {
    const findReservations = async () => {
      const res = await fetch("/reservations");
      const data = await res.json();
      setReservations(data.data);
    };
    findReservations();
  }, []);

  if (!reservations) {
    return <div>Loading, please wait...</div>;
  }

  return (
    <Wrapper>
      <Link to="/">
        SlingAir
        <MdOutlineAirplaneTicket
          size={50}
          style={{ paddingLeft: "8px", color: "var(--color-selective-yellow)" }}
        />
      </Link>
      <Nav>
        {reservations.length > 0 && (
          <StyledNavLink to="/view-reservation">Reservation</StyledNavLink>
        )}
        <StyledNavLink to="/profile">Profile</StyledNavLink>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background: var(--color-alabama-crimson);
  height: 110px;
  padding: var(--padding-page) 18px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 40px;
  color: white;
  font-family: var(--font-heading);
`;
// const Logo = styled.div`
//   color: black;
//   background-image: url(${slingairLogo});
//   background-repeat: no-repeat;
//   background-position: left center, right center;
//   background-size: contain;
//   overflow: hidden;
//   text-indent: -1000px;
//   height: 60px;
//   width: 550px;
// `;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  background: var(--color-selective-yellow);
  /* border: 1px solid transparent; */
  border-radius: 4px;
  color: var(--color-alabama-crimson);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 18px;
  height: 42px;
  margin: 0 0 0 8px;
  padding: 0 14px;
  width: 100%;
  text-decoration: none;
  transition: all ease 400ms;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    background: var(--color-alabama-crimson);
    color: var(--color-selective-yellow);
    border-color: var(--color-selective-yellow);
  }
`;

export default Header;

// Notes :
/*Only show links if the user has a reservation already */
