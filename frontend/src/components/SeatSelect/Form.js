// Form : client personnal information

// import React from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

// const Form = () => {

//   const [givenName, setGivenName] = React.useState("");
//   const [surname, setSurname] = React.useState("");
//   const [email, setEmail] = React.useState("");

//   return (
//     <FormInput>
//       <UserInput>
//         <FirstName
//           placeholder="First Name"
//           onChange={(e) => {
//             setGivenName(e.target.value);
//               }}
//         ></FirstName>
//         <LastName
//           placeholder="Last Name"
//           onChange={(e) => {
//             setSurname(e.target.value);
//               }}
//         ></LastName>
//         <Email
//           placeholder="Email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//               }}
//         ></Email>
//         <Submit
//         type="submit"
//         onClick={handleReservation}
//         disabled={!givenName || !surname || !email}
//         style={{opacity: !givenName || !surname || !email ? 0.5 : undefined,}}
//         >
//         Confirm</Submit>
//       </UserInput>
//     </FormInput>
//   );
// };

// const FormInput = styled.div`
//   display: flex;
// `;

// const UserInput = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: solid var(--color-alabama-crimson) 5px;
// `;

// const FirstName = styled.input`
//   margin: 20px;
// `;

// const LastName = styled.input`
//   margin: 20px;
// `;

// const Email = styled.input`
//   margin: 20px;
// `;

// const Submit = styled.button`
//   margin-bottom: 10px;
//   border-radius: 4px;
//   cursor: pointer;
//   border: none;
// `;

// export default Form;
