const expect = require('chai').expect;	
const request = require('request');
const fs = require('fs');

var dataFilePath = './TestData.xml';
var Data;
var expectedStatusCode = 404;
var expectedSuccessString = 404;
var headerOptions = { "Content-Type": "application/soap+xml; charset=utf-8", "Content-Length": 999 };

const httpOptions = {
    url: 'http://www.example.org/InStock%20HTTP/1.1',
body: Data,
headers: headerOptions,
json: true
}
	
describe('Make a SOAP call', function () {
	// Assert the node sample request existence
	    it('Assert the node sample request existence', function (){
	        expect(fs.existsSync(dataFilePath)).to.be.true;
        });
    
	// Assert the response for status code
	    it('Assert the response for status code', function(){
	        request.post(httpOptions, function(err, res, body){
	            expect(res.statusCode).to.equal(200);
	    });
    });    
});
