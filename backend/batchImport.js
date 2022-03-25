// Will import the flights and reservations data inside of MongoDB

const { MongoClient } = require("mongodb");
const assert = require("assert"); // Do not put assert inside {}
require("dotenv").config();
const { MONGO_URI } = process.env;

const { flights, reservations } = require("./data");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const newFlightArr = flights.SA231.map((flight) => {
  flight._id = flight.id;
  delete flight.id;
  return flight;
});

const newResArr = reservations.map((res) => {
  res._id = res.id;
  delete res.id;
  return res;
});

console.log(newResArr);

const batchImport = async () => {
  const client = await new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("SlingAir");

    const resultFli = await db.collection("Flights").insertMany(newFlightArr);
    assert.equal(newFlightArr.length, resultFli.insertedCount);

    const resultRes = await db.collection("Reservations").insertMany(newResArr);
    assert.equal(newResArr.length, resultRes.insertedCount);

    console.log("Connected");
  } catch (error) {
    console.log(error.message);
  }
  client.close();
};

batchImport();

// Notes :
// .env file needs to be inside the backend folder
// If error in block of code 35-36, it won't run the block(38-39) :
// this is the reason why newResArr wasn't migrated in reservations collection (DB)
