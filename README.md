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


## Database oluştur, Yetkilendirme

```bash

$ mongosh
$ use turkcell 
$
$ db.createUser({
  user: "hamit",
  pwd: "123",
  roles:[{role:"dbOwner",db:"turkcell"}]
})

$ db.getUsers()
$ mongosh --username hamit --password 123 --authenticationDatabase turkcell

```
---
