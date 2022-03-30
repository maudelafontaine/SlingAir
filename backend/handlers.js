"use strict";
const assert = require("assert");
const { MongoClient, ObjectId } = require("mongodb");

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

// Create a reservation
const addReservations = async (req, res) => {
  const userDetails = req.body;

  const reservationDetails = {
    _id: uuidv4(),
    flight: userDetails.flight,
    seat: userDetails.seat,
    givenName: userDetails.givenName,
    surname: userDetails.surname,
    email: userDetails.email,
  };

  // const userInfo = {
  //   _id: userDetails.email,
  //   givenName: userDetails.givenName,
  //   surname: userDetails.surname,
  //   reservation: [reservationDetails._id],
  // };

  const query = { _id: userDetails.seat };
  const updated = { $set: { isAvailable: false } };

  const client = await new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("SlingAir");
    const reservationResult = await db
      .collection("Reservations")
      .insertOne(reservationDetails);
    console.log(reservationResult);
    assert.equal(true, reservationResult.acknowledged);

    const flightResult = await db
      .collection("Flights")
      .updateOne(query, updated);
  } catch (err) {
    return res.status(400).json({
      status: 400,
      data: reservationDetails.seat,
      message: "Cannot create reservation",
    });
  }
  client.close();
  res.status(201).json({
    status: 201,
    data: reservationDetails.seat,
    message: "Reservation successfully confirmed!",
  });
};

const deleteReservation = async (req, res) => {
  console.log(req);
  const _id = req.params._id;

  const query = { _id: req.body.seat };
  const updated = { $set: { isAvailable: true } };

  if (!_id || !req.body.seat) {
    res.status(400).json({
      status: 400,
      // data: resultDeleted,
      message: `Missing`,
    });
    return;
  }

  const client = new MongoClient(MONGO_URI, options);
  // console.log({ _id, query });

  try {
    await client.connect();
    const db = client.db("SlingAir");
    const resultDeleted = await db
      .collection("Reservations")
      .deleteOne({ _id });

    await db.collection("Flights").updateOne(query, updated);

    if (resultDeleted.deletedCount === 1) {
      res.status(201).json({
        status: 201,
        data: resultDeleted,
        message: `Reservation #${_id} successfully deleted.`,
      });
    } else {
      res.status(404).json({
        status: 404,
        data: resultDeleted,
        message: "Reservation not found",
      });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ status: 500, data: req.body, message: err.message });
  } finally {
    client.close();
  }
};

const updateReservation = async (req, res) => {};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
