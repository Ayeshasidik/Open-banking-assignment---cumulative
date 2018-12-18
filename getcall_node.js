const https = require('https');
var assert = require('assert');

let data='';
var status=200;
var userid=1;
https.get('https://jsonplaceholder.typicode.com/posts/1',

function(resp){
    resp.on('data',
    function(chunk){
    data += chunk;
    // Asserting response status code ie 200 {with data type}
  assert(resp.statusCode === status);
  console.log("Response code is validate and it is : "+resp.statusCode);
//  console.log('HEADERS: ' + JSON.stringify(resp.userId));
});

resp.on('end', () => {
    console.log("Printing response data :");
    console.log(data);
    let response = JSON.parse(data);

  //  console.log(response.userId);
  //  userid=response.userId;
    assert(response.userId === userid);
    console.log("User id from Response code is validate and it is : "+response.userId);
});

}).on("error",
function(e){
    console.log("Got error: " + e.message);
});


/************           OUTPUT ****************
*
* C:\Users\Ayesha\Desktop\Asignment>node ques4.js
Response code is validate and it is : 200
Printing response data :
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
User id from Response code is validate and it is : 1
*
*
*
*/

