var request = require('request');
var assert = require('assert');

// Set the headers
var headers = {
    'User-Agent':
    'Super Agent/0.0.1',
    'Content-Type':
    'application/json'
}
// Configure the request
var options = {
url: 'https://jsonplaceholder.typicode.com/posts',
method: 'POST',
headers: headers,

form: {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
}
// Start the request
request(options, function (error, response, body) {
// console.log("Success" +response.statusCode);
assert(response.statusCode === 201);
console.log("Response code is validate and it is : " + response.statusCode);
console.log(body);
var jsonData=JSON.parse(body);
// console.log(jsonData.id);
assert(jsonData.id===101);
console.log("Id from Response is validated : " + jsonData.id);
})

/************* OUT PUT ***************
C:\Users\Ayesha\Desktop\Asignment> npm install request
C:\Users\Ayesha\Desktop\Asignment>node ques5.js
Response code is validate and it is : 201
{
"title": "foo",
"body": "bar",
"userId": "1",
"id": 101
}
Id from Response is validated : 101
*/

