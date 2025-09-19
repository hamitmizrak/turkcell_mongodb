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
$ db.version()       ==> Bağlanılan MongoDB versiyonun ekran yazısn (8.0.13)
$ db.getUsers()      ==> Database içindeki kullanıcıları bana versin
{
  users: [
    {
      _id: 'turkcell.hamit',
      userId: UUID('afeba7c4-6b87-4944-be6a-2bec20a18a45'),
      user: 'hamit',
      db: 'turkcell',
      roles: [ { role: 'dbOwner', db: 'turkcell' } ],
      mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
    }
  ],
  ok: 1
}

$ db.adminCommand({listDatabases:1})    ==> Veritabanların detaylı bilgilendirimesi içindeki
{
  databases: [
    { name: 'admin', sizeOnDisk: Long('135168'), empty: false },
    { name: 'config', sizeOnDisk: Long('110592'), empty: false },
    { name: 'local', sizeOnDisk: Long('73728'), empty: false },
    { name: 'turkcell', sizeOnDisk: Long('16384'), empty: false }
  ],
  totalSize: Long('335872'),
  totalSizeMb: Long('0'),
  ok: 1
}

$  db.getRoles({showBuiltinRoles:true})  ==> Sunucudaki tüm veri tabanı rollerin listesini


$ db.getMongo()           ==> Veri tabanı Bağlantı Bilgisini Göster
mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8


$ db.serverStatus()       ==> Sunucunu genel durumu, memory,disk, ve bir çok istatistiği

$ db.getCollectionInfos()  ==> Veritabanındaki tüm koleksiyonların isim ve tip bilgisin dönder
[
  {
    name: 'blog',
    type: 'collection',
    options: {},
    info: {
      readOnly: false,
      uuid: UUID('512848fa-174b-432c-96d8-f4094f14c588')
    },
    idIndex: { v: 2, key: { _id: 1 }, name: '_id_' }
  },
  {
    name: 'blogcategory',
    type: 'collection',
    options: {},
    info: {
      readOnly: false,
      uuid: UUID('bd0c700e-2ae5-416a-b774-08fd1fc5b06d')
    },
    idIndex: { v: 2, key: { _id: 1 }, name: '_id_' }
  }
]


$ db.getSiblingDB("admin").system.users.find().pretty();  ==>  Tüm veri tabanlarındaki tüm kullancııların lsitesi(admin yetkisi ver)
[
  {
    _id: 'turkcell.hamit',
    userId: UUID('afeba7c4-6b87-4944-be6a-2bec20a18a45'),
    user: 'hamit',
    db: 'turkcell',
    credentials: {
      'SCRAM-SHA-1': {
        iterationCount: 10000,
        salt: 'n6VCcZNYx5ptTkQv566/yw==',
        storedKey: 'VSDvupAOr/6lQoCCX44fGHdHqpI=',
        serverKey: 'uK5Bhtjve6WXNqMrTff8+YDylQ8='
      },
      'SCRAM-SHA-256': {
        iterationCount: 15000,
        salt: 'PeR89jTrXMZpGhhWfMKDw+rxMRbeuKl+5fauUg==',
        storedKey: 'HGPFqkMMXqatfmAEXVnarRXGk8MLaLA3R8RjaF7BgNs=',
        serverKey: 'xVctIQQnBfLSpABT2Nq1AAdeYxzZGNu9I1BK42SF5sU='
      }
    },
    roles: [ { role: 'dbOwner', db: 'turkcell' } ]
  }
]
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
