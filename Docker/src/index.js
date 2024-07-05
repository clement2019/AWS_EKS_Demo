const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Hard-Coded for demo
const CONTACTS = [
                    {
                      "name": "Funsho philips",
                      "email": "funsho@yahoo.com",
                      "phone": "+234-80444565"
                    },
                    {
                      "name": "hope emilodun",
                      "email": "emilodun@gmail.com",
                      "phone": "+234-803347777"
                    },
                    {
                      "name": "feyi ayeni",
                      "email": "mafeyi@yahoo.com",
                      "phone": "+234-80334565"
                    }
                ];

app.get('/contacts', (req, res) => {
  res.json({contacts: CONTACTS});
});

app.listen(3000, () =>{
   console.log('Server running on port 3000.'); 
});