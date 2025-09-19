// root ile gelen entrypoint bu dosyaları bir kere çalıştırır
db = db.getSiblingDB('turkcell'); // örnek uygulama veritabanı
db.createUser({
  user: 'hamit',
  pwd: '123',
  roles: [{ role: 'readWrite', db: 'turkcell' }],
});
