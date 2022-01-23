const express = require('express');
const path = require('path');

// express app
const app = express();

// listen for requests
app.listen(3000);

// root request, show static welcome page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// GET all users
app.get('/api/users', (req, res) => {
    res.statusCode = 200;
    res.send({status: 1, data: users});
    res.end();
});


// GET a single user data by ID
app.get('/api/users/:id', (req, res) => {
    res.statusCode = 200;
    let theUser = -1;
    for(i = 0; i<users.length; i++){
        if(users[i].id == Number(req.params.id)){
            theUser = i;
        }
    } 
    if(theUser == -1){
        res.send({status: 0})
        res.end();
    }
    res.send({status:1, data: users[theUser]});
    res.end();
});

// users data set, as JSON array
const users = [
      {
        "id": 1,
        "email": "cameron@cameron.com",
        "first_name": "Cameron",
        "last_name": "Smith",
        "phone": "604-228-8680",
        "avatar": "https://avatars.dicebear.com/api/micah/cameron.png"
      },
      {
        "id": 2,
        "email": "jane@jane.com",
        "first_name": "Jane",
        "last_name": "Smith",
        "phone": "778-665-8375",
        "avatar": "https://avatars.dicebear.com/api/micah/jane.png"
      },
      {
        "id": 3,
        "email": "jim@hotmail.com",
        "first_name": "Jim",
        "last_name": "Andrews",
        "phone": "415-778-9966",
        "avatar": "https://avatars.dicebear.com/api/micah/jim.png"
      }
    ];
