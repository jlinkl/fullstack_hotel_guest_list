use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "James",
    email: "gmail",
    checked_in: "true"
  },
  {
    name: "bill",
    email: "bing",
    checked_in: "false"
  },
  {
    name: "bob",
    email: "yahoo",
    checked_in: "false"
  }
]);
