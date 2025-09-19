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
$  mongosh "mongodb://hamit:123@localhost:27017/turkcell"

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
$ db.runCommand({ komutAdi: parametre })  ==> Her türlü özel/ileri seviye veritabanı komutunu manuel çalıştırmanı sağlar.
db.runCommand({ dbStats: 1 })  ==> Veritabanı hakkında istatistik almak
db.runCommand({ listIndexes: "blog" })  ==> Koleksiyonun indexlerini görmek
db.runCommand({ connectionStatus: 1 }) ==> Mevcut bağlantıdaki kullanıcıyı görmek
db.adminCommand({ listDatabases: 1 })   ==> Bütün veritabanlarını detaylı listelemek
db.runCommand({ buildInfo: 1 })  ==> MongoDB versiyonunu öğrenmek

$ db.getCollectionNames().forEach(function(coll){
  printjson(db.getCollection(coll).stats())
})    ==>  Aktif veritabanında tüm koleksiyonların boyutlarını, belge sayılarını detaylı gör

$ db.getSiblingDB("admin").system.users.find().pretty() ==> Sunucudaki tüm kullanıcıları ve rollerini detaylıca listeler.

$ db.adminCommand("listDatabases").databases.map(x => x.name)  ==>  Basit dizi olarak sadece isimleri döndürür.
$ db.runCommand({ connectionStatus: 1 }) ==> Şu anki bağlantıdaki kullanıcı ve rollerini gösterir.
$ db.isMaster()   ==> Bir veritabanının readonly olup olmadığını (salt okunur mod) kontrol et
$ db.system.indexes.find().pretty() ==> Tüm indexlerin dökümünü verir.
$ db.getCollectionInfos().forEach(function(ci){
  print(ci.name + " - type: " + ci.type + ", options: " + JSON.stringify(ci.options))
})  ==> Koleksiyon tiplerini, özel ayarlarını, capped olup olmadığını vs. listeler.
$ rs.status()  ==> Sadece replica set kuruluysa, hangi node primary/secondary gibi bilgileri verir.

$ db.serverCmdLineOpts().parsed.systemLog  ==> MongoDB'nin kullandığı log dosyasının tam yolunu gösterir.
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
$ db.getCollectionNames().forEach(function(c) { db[c].drop(); }) ==> Sadece blog ve blogcategory koleksiyonlarını topluca siler.

$ db.koleksiyon_adi.find()  ==> Koleksiyon içindeki tüm dokümanları (verileri) listeler.
$ db.koleksiyon_adi.find().limit(10) ==> Koleksiyondaki ilk 10 dokümanı listeler.
$ db.koleksiyon_adi.find().sort({ alan: 1 })    // Artan (ASC) Koleksiyonda Belirli Alanlara Göre Sıralama
$ db.koleksiyon_adi.find().sort({ alan: -1 })    // Artan (DESC) Koleksiyonda Belirli Alanlara Göre Sıralama
$ db.koleksiyon_adi.find().sort({ _id: -1 }).limit(5) ==> Son eklenen 5 kaydı listeler.
$ db.koleksiyon_adi.find({ alan: "deger" }).explain("executionStats")  ==> Sorgunun nasıl çalıştığı, kaç kayıt tarandığı, index kullanımı vb. analiz edilir.

$ db.koleksiyon_adi.distinct("alan")  ==> Belirli bir alanın tekrar etmeyen (unique) değerlerini döndürür.

$ db.koleksiyon_adi.insertOne({ alan: "deger" })  ==> Koleksiyona tek bir doküman ekler.
$ db.koleksiyon_adi.insertMany([{ alan: "deger1" }, { alan: "deger2" }])  ==> Koleksiyona birden fazla doküman ekler.
$ db.koleksiyon_adi.deleteOne({ alan: "deger" })  ==> Eşleşen ilk dokümanı siler.
$ db.koleksiyon_adi.deleteMany({ alan: "deger" })  ==> Eşleşen tüm dokümanları siler.

$ db.koleksiyon_adi.updateOne(
  { alan: "deger" },
  { $set: { alan: "yeni_deger" } }
)   ==>  Koleksiyon Verilerini Güncelle


$ db.koleksiyon_adi.updateMany(
  { alan: "deger" },
  { $set: { alan: "yeni_deger" } }
)  ==> Eşleşen tüm dokümanları günceller.


$ db.koleksiyon_adi.stats()  ==> Koleksiyonun Detaylı İstatistiklerini Gör
$ db.koleksiyon_adi.getIndexes() ==>  Koleksiyon üzerindeki tüm indexleri (ve primary key'i) listeler.
$ db.getCollectionNames().includes("koleksiyon_adi") ==> Koleksiyonun var olup olmadığını kontrol eder (Boolean döner).
$ db.koleksiyon_adi.countDocuments()  ==>  Koleksiyon içindeki toplam belge (kayıt) sayısını verir.
$ db.getCollectionInfos({ name: "koleksiyon_adi" }) ==> Bir Koleksiyonun Tipini ve Ayarlarını Görmek


$ db.koleksiyon_adi.aggregate([
  { $project: { arrayofkeyvalue: { $objectToArray: "$$ROOT" } } },
  { $unwind: "$arrayofkeyvalue" },
  { $group: { _id: null, fields: { $addToSet: "$arrayofkeyvalue.k" } } }
])  ==> Tüm farklı alan isimlerini bulur.


```

---
