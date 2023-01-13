let express = require("express");
let app = express();
var expect = require("chai").expect;
var request = require("request");
describe("Add two number", function(){
var url = 'http://localhost:3000/addTwoNumbers/3/5';
//First it function
    it("return 200 status to check if api works", function(done){
        request(url, function(error, response){
            expect(response.statusCode).to.equal(200);
            done();
        });
      });
    
    //Second it function
    it("return statusCode key in body to check if api results give 200 ", function(done){
        request(url, function(error, response, body){
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done();
        });
      });
    });
