"use strict";
const assert = require("assert");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// Connect to MongoDB
const connectToMongo = async () => {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("SlingAir");
  return { db, client };
};

// Retrieve all flights numbers
const getFlights = async (req, res) => {
  const { db, client } = await connectToMongo();

  const result = await db.collection("Flights").find().toArray();

  if (result.length > 0) {
    return res.status(200).json({
      status: 200,
      data: result,
      message: "Successfully retrieved flights numbers",
    });
  } else {
    return res.status(400).json({
      status: 400,
      data: result,
      message: "Cannot retrieve flights numbers!",
    });
  }
  client.close();
};

// Retrieve single flight data (seat)
const getFlight = async (req, res) => {
  const _id = req.params._id;

  const { db, client } = await connectToMongo();

  await db.collection("Flights").findOne({ _id }, (err, result) => {
    result
      ? res.status(200).json({
          status: 200,
          data: result,
          message: `Successfully retrieved seat ${_id}`,
        })
      : res.status(404).json({
          status: 404,
          data: result,
          message: `Cannot retrieve seat ${_id}`,
        });
    client.close();
  });
};

// Retrieve all reservations
const getReservations = async (req, res) => {
  const { db, client } = await connectToMongo();

  const result = await db.collection("Reservations").find().toArray();

  if (result.length > 0) {
    return res.status(200).json({
      status: 200,
      data: result,
      message: "Successfully retrieved all reservations",
    });
  } else {
    return res.status(400).json({
      status: 400,
      data: result,
      message: "Cannot retrieve reservations!",
    });
  }
  client.close();
};

// Retrieve a single reservation
const getSingleReservation = async (req, res) => {
  const _id = req.params._id;

  const { db, client } = await connectToMongo();

  await db.collection("Reservations").findOne({ _id }, (err, result) => {
    result
      ? res.status(200).json({
          status: 200,
          data: result,
          message: `Successfully retrieved reservation #${_id}`,
        })
      : res.status(404).json({
          status: 404,
          data: result,
          message: `Cannot retrieve reservation #${_id}`,
        });
    client.close();
  });
};

// Create a reservation (post)

const addReservations = (req, res) => {};

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
