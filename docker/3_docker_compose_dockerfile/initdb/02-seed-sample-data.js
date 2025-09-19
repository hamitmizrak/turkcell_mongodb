db = db.getSiblingDB("appdb");
db.items.insertMany([
  { name: "alpha",  createdAt: new Date() },
  { name: "beta",   createdAt: new Date() }
]);
