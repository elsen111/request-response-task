const express = require('express');
const app = express();

const products = [ 
    {"id": 1, "name": "Laptop" , "price": 1000, "amount": 1},
    {"id": 2, "name": "PC" , "price": 850, "amount": 1 },
    {"id": 3, "name": "Television", "price":1500 , "amount": 1},
    {"id": 4, "name": "Iron", "price": 85, "amount": 1},
    {"id": 5, "name": "Mixer", "price": 100, "amount": 1},
    {"id": 6, "name": "Vaccuum-cleaner", "price": 180, "amount": 1},
    {"id": 7, "name": "Smartphone", "price": 800, "amount": 1},
    {"id": 8, "name": "Powerbank", "price": 45, "amount": 1},
    {"id": 9, "name": "Mouse", "price": 10, "amount": 1},
    {"id": 10, "name": "Flashcard", "price": 50, "amount": 1}
 ];

 app.get('/products', function (req, res) {
    res.send(JSON.stringify(products));
});

app.get('/products/:id', function (req, res) {
    res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));
});
  
app.listen(3000, () => {console.log('Server running....')})
