# SlingAir:airplane:

SlingAir is a seat-booking full-stack web application created for the SlingAirLines company.

## :star:The Goal

This project was created in part to practice Node.js, used for the backend, and MongoDB to save the flights and reservations data.

## :computer: Technologies Used

- HTML
- CSS
- Styled-components
- Javascript
- React
- Node.js
- RESTful API
- Express
- MongoDB

## Project Setup

### The Frontend

1. Open a terminal in VS Code
2. Type `cd frontend`
3. Type `yarn install`

Use `yarn dev:frontend` to start the frontend dev environment.

### The Backend

1. Open _another_ terminal in VS Code
2. Type `cd backend`
3. Type `yarn install`

Use `yarn dev:backend` to start the backend dev environment.

## Functionalities

- When a user navigates to `http://localhost:3000`, they are presented with an input to enter the flight number.
- With the flight number, it makes a request to the server for the seating availability on that flight.
- When a response with seating is received, it displays the seating input as well as the form requesting user's information.
- User selects a seat, enters information and clicks 'Confirm'.
- It contact the server with the data, and wait for a success response to redirect to the `/confirmed` page.
- The confirmed page displays a confirmation message to the user with the info that they entered on the previous screen.

## Next Steps

The following are the next steps in improving my application:

- Use localStorage to save the reservation id, to allow for retrieval if the user closes and reopens the browser.
- Add more than one flight.
- Create a Profile page where the user could view their personnal information and the list of the seats booked on different flights.
- Create a Reservation page where the user could view their reservation.
