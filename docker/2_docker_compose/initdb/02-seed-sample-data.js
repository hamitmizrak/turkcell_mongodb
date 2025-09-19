db = db.getSiblingDB('appdb');
db.items.insertMany([
  { name: 'servlet', createdAt: new Date() },
  { name: 'jsp', createdAt: new Date() },
  { name: 'jsf', createdAt: new Date() },
  { name: 'jstl', createdAt: new Date() },
  { name: 'spring framework', createdAt: new Date() },
  { name: 'spring boot', createdAt: new Date() },
]);
