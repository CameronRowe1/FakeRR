# Fake RR!

Hi! Are you a recruiter looking for an assignment for front-end candidates? Use this as API for testing their skills. Ask them to write an application to fetch the data, and design their own UI response.

For developers testing their new language or new skills, try calling these API to test how your new front-end environment would work with HTTP requests and responses.

## API Documentation

### 1. GET /api/users/2
Send a GET request, with no body to **/api/users/{id}** where id is a user id existing in our list (see below). A user detail will in the response's data object.

### Response
Successful request (id = 2 exists) will give you this JSON object:

    {
      "status": 1,
      "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Joe",
        "last_name": "Smith",
        "phone": "1234567890",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
      }
    }

Unsuccessful request like id = -3, will send a simple status of 0, and no further data.

    {
      "status": 0
    }

 ### 2. GET /api/users/
Send a GET request, with no body to **/api/users/** to get a list of user data existing in our list (see below)

### Response
Successful request (correct url query) will give you this JSON object:

    {
      "status": 1,
      "data": [
        {
          "id": 2,
          "email": "janet.weaver@reqres.in",
          "first_name": "Joe",
          "last_name": "Smith",
          "phone": "1234567890",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
          "id": 3,
          "email": "jane@reqres.in",
          "first_name": "Jane",
          "last_name": "Smith",
          "phone": "1234567890",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
          "id": 4,
          "email": "jim@reqres.in",
          "first_name": "Jim",
          "last_name": "Smith",
          "phone": "1234567890",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
        }
      ]
    }
 
## Credits

Developed by Cameron Rowe
