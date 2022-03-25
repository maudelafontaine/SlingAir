// Form : client personnal information

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  let navigate = useNavigate();

  const handleChange = () => {
    console.log("Hello");
  };

  const handleSubmit = () => {
    console.log("Clicked");
    navigate("/confirmed");

    // if firstName + lastName + email.length > 0 => get redirected
  };
  return (
    <Wrapper>
      <UserInput>
        <FirstName
          value={firstName}
          placeholder="First Name"
          onChange={handleChange}
        ></FirstName>
        <LastName
          value={lastName}
          placeholder="Last Name"
          onChange={handleChange}
        ></LastName>
        <Email
          value={email}
          placeholder="Email"
          onChange={handleChange}
        ></Email>
        <Submit onClick={handleSubmit}>Confirm</Submit>
      </UserInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const UserInput = styled.div`
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

export default Form;
