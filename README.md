# Turkcell MongoDB

## []()

## Git Clone

```bash
git init
git add .
git commit -m "mongodb config"
git remote origin URL
git push -u origin master
git clone https://github.com/hamitmizrak/turkcell_mongodb.git
```

## Mongo version

```bash
$ mongosh --help
$ mongosh --version
$
$ net start mongoDB
$ net stop mongodb
$ net query mongodb
$
$ mongosh
$ mongosh --port 27017
$
$ netstat -aon | findstr :27017
$ taskkill /PID PID_NUMBER /F

```

---

## Database oluştur, Special Yetkilendirme

```bash

$ mongosh
$ use turkcell
$ Sadece turkcell databaseinde yetkilendirme verdim
$ db.createUser({
  user: "hamit",
  pwd: "123",
  roles:[{role:"dbOwner",db:"turkcell"}]
})

$ db.getUsers()
$ mongosh --username hamit --password 123 --authenticationDatabase turkcell

```

---

## Database oluştur, Tüm Yetkilendirme

```bash

$ mongosh
$ use admin
$ Tüm  databaseinde yetkilendirme verdim
$ db.createUser({
  user: "hamit",
  pwd: "123",
  roles:[{role:"root",db:"admin"}]
})

$ db.getUsers()
$ mongosh --username hamit --password 123 --authenticationDatabase turkcell

```

---

## Database Komutları

```bash
$ mongosh
$ use turkcell
$ show dbs           ==> Bütün database listelesin
$ db                 ==> Sadece çalıştığım database ismini verdim
$ db.dropDatabase()  ==> Database sil
$ db.stats()         ==> Database genel istatiksel yapısını bize gösterir.

```

---

## Database Collections(Tablolar)

```bash
$ mongosh
$ use turkcell
$ db.createCollection("blogcategory")
$ db.createCollection("blog")
$ show collections ==> Bütün tabloları listelesin
$ db.getCollectionNames() ==> Koleksiyonların isimlerini bir dizi olarak ver


```

---
