const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
// let db;
const db = require('../database/mysql/index.js');

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/api/cows', (req, res) => {
  db.query('select * from cows' , (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  })
})

app.post('/api/cows', (req, res) => {
  const sqlString = `insert into cows(name, description) values(?, ?) `
    db.query(sqlString , [req.body.name, req.body.description ] ,(err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        db.query('select * from cows' , (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
        }
    })
  }
  })
})

app.patch('/api/cows/:id', (req, res) => {
  const sqlString = `update cows set name = "${req.body.name}" where id = ${req.params.id}`
  console.log('sqlString:', sqlString);
    db.query(sqlString ,(err, result1) => {
      if (err) {
        res.status(500).send(err);
      } else {
        db.query('select * from cows' , (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
        }
    })
  }
  })
})

app.delete('/api/cows/:id', (req, res) => {
  const sqlString = `delete from cows where id = ${req.params.id}`
  console.log('sqlString:', sqlString);
    db.query(sqlString ,(err, result1) => {
      if (err) {
        res.status(500).send(err);
      } else {
        db.query('select * from cows' , (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(result);
        }
    })
  }
  })
})



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stope node, restart and try again, valid options are mysql and mongo')
      }
    })

});
