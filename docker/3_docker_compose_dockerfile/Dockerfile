# image dosyası
FROM mongo:7

# kendi config dosyamızı kopyalıyoruz
COPY config/mongod.conf /etc/mongo/mongod.conf

# port ve komut
EXPOSE 27017

# başlangıç komutu
CMD ["mongod", "--config", "/etc/mongo/mongod.conf"]
