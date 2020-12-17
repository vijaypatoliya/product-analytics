# Product Analytics

## Setup 
```
$ git clone 
$ npm install 
```
#### Database Connection
Rename .env.example to .env and update database connection string

## Seeding Dummy Records
It will create userView collection with 200000 records.
```
$ npm run seed
```

## Run
```
$ npm run start
```
GET: `http://localhost:3000/api/userView/productId=1?startDate=2020-10-10&endDate=2020-11-11` 
It will get all record view & user count between start and end date. All params are optional