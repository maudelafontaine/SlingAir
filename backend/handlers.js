"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// Retrieve all flights numbers
const getFlights = (req, res) => {
  return res.status(200).json({ status: 200, data: flights });
};

// Retrieve single flight data (seat)
const getFlight = (req, res) => {
  const seatId = req.params.id;
  const seat = flights.SA231.find((flight) => flight.id === seatId);

  if (!seat) {
    return res
      .status(404)
      .json({ status: 404, message: "Cannot find seat", data: seat });
  } else {
    return res.status(200).json({ status: 200, data: seat });
  }
};

// Create a reservation (post)

const addReservations = (req, res) => {};

const getReservations = (req, res) => {};

const getSingleReservation = (req, res) => {};

const deleteReservation = (req, res) => {};

const updateReservation = (req, res) => {};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
