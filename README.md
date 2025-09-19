# Turkcell MongoDB

## [GitHub URL](https://github.com/hamitmizrak/turkcell_mongodb.git)

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

$ net start mongoDB
$ net stop mongodb
$ net query mongodb

$ mongosh
$ mongosh --port 27017

$ netstat -aon | findstr :27017
$ taskkill /PID PID_NUMBER /F

```

---

## Database oluştur, Special Yetkilendirme

```bash

$ net stop mongodb
$ net start mongodb

$ mongosh
$ use turkcell
$ db.dropDatabase()  ==> Database Silmek

$ use turkcell
$ Sadece turkcell databasinde yetkilendirme verdim
$ db.createUser({
  user: "hamit",
  pwd: "123",
  roles:[{role:"dbOwner",db:"turkcell"}]
})

$ db.getUsers()
$ db.blog.find()

$ yetkilendirme :  mongosh "mongodb://<user_name>:<user_password>@localhost:27017/turkcell"
$ yetkilendirme :  mongosh "mongodb://hamit:123@localhost:27017/turkcell"

$ db.serverStatus()       ==> Sunucunu genel durumu, memory,disk, ve bir çok istatistiği
$ db.getCollectionInfos()  ==> Veritabanındaki tüm koleksiyonların isim ve tip bilgisin dönder
$ db.getSiblingDB("admin").system.users.find().pretty();  ==>  Tüm veri tabanlarındaki tüm kullancııların liste(admin yetkisi ver)

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
$ db.version()       ==> Bağlanılan MongoDB versiyonun ekran yazısn (8.0.13)
$ db.getUsers()      ==> Database içindeki kullanıcıları bana versin

$ db.adminCommand({listDatabases:1})    ==> Veritabanların detaylı bilgilendirimesi içindeki
$  db.getRoles({showBuiltinRoles:true})  ==> Sunucudaki tüm veri tabanı rollerin listesini
$ db.getMongo()           ==> Veri tabanı Bağlantı Bilgisini Göster
mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8

$ db.serverStatus()       ==> Sunucunu genel durumu, memory,disk, ve bir çok istatistiği
$ db.getCollectionInfos()  ==> Veritabanındaki tüm koleksiyonların isim ve tip bilgisin dönder
$ db.getSiblingDB("admin").system.users.find().pretty();  ==>  Tüm veri tabanlarındaki tüm kullancııların liste(admin yetkisi ver)
```

---

## Database Collections(Tablolar)

```bash
$ mongosh
$ use turkcell
$ db.createCollection("blogcategory")
$ db.createCollection("blog")
$ show collections            ==> Bütün tabloları listelesin
$ db.getCollectionNames()     ==> Koleksiyonların isimlerini bir dizi olarak ver
$ db.blog.drop()              ==> Koleksiyonlar silmek


```

---
