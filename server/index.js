const express = require ("express");

const mysql = require("mysql");
const cors = require ("cors");



const app = express();

app.use(express.json());

app.use(cors());




const db = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   port:"3307",
   database: "portfoliosystem",
   multipleStatements: true

});
// mysqlConnection.connect((err) =>{
//     if(!err)
//     {
//         console.log("Connected");
//     }
//     else
//     {
//         console.log("Connection Failed")
//     }

// }); 

app.post("/create", (req, res) => {
    
    const type =req.body.type;
    const quantity =req.body.quantity;
    const price=req.body.price;
    const date =req.body.date;

    db.query("INSERT INTO portfolio ( type, quantity, price, date) VALUES ( ?, ?, ?, ?)",
    [type, quantity, price, date],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send ("Values Inserted");
        }
    }

  );

});

app.get("/portfolio", (req, res) => {
    db.query("SELECT * FROM portfolio", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/stock", (req, res) => {
    db.query("SELECT * FROM stock", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});  

app.get("/dashboard", (req, res) => {
  db.query("SELECT name,quantity, price, total(quantity*price) as total FROM portfolio WHERE name='Standard Chartered Bank' and type='buy'  ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
  db.query("SELECT name,quantity, price, total(quantity*price) as total FROM portfolio WHERE name='Standard Chartered Bank' and type='sell'  ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
  

});


app.get("/dashboard1", (req, res) => {
  db.query("SELECT name,quantity, price, total(quantity*price) as total FROM portfolio WHERE name='Nepal Investment Bank' and type='buy'  ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
  db.query("SELECT name,quantity, price, total(quantity*price) as total FROM portfolio WHERE name='Nepal Investment Bank' and type='sell'  ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
  

});




app.listen(3005, () => {
  console.log("The port is running");
});
    