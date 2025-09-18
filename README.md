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
{
  roles: [
    {
      role: 'read',
      db: 'turkcell',
      isBuiltin: true,
      roles: [],
      inheritedRoles: []
    },
    {
      role: 'dbOwner',
      db: 'turkcell',
      isBuiltin: true,
      roles: [],
      inheritedRoles: []
    },
    {
      role: 'readWrite',
      db: 'turkcell',
      isBuiltin: true,
      roles: [],
      inheritedRoles: []
    },
    {
      role: 'dbAdmin',
      db: 'turkcell',
      isBuiltin: true,
      roles: [],
      inheritedRoles: []
    },
    {
      role: 'userAdmin',
      db: 'turkcell',
      isBuiltin: true,
      roles: [],
      inheritedRoles: []
    },
    {
      role: 'enableSharding',
      db: 'turkcell',
      isBuiltin: true,
      roles: [],
      inheritedRoles: []
    }
  ],
  ok: 1
}

$ db.getMongo()      ==> Veri tabanı Bağlantı Bilgisini Göster
mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8


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
