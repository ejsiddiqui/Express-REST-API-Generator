'use strict';

process.env.RATE_LIMIT = 10;
var chai = require('chai');
chai.should();
var config = require('../../config');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var request = require('supertest');
var router = require('../../routes');
var express = require('express');

var app = express();
app.use('/',router);

var agent = request.agent(app);

describe('Test rate limiting', function(){

    it('should reach request rate limit', function(done){
        agent
        .get('/initialize')
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize');
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            return agent
            .get('/initialize')
            .expect(429);
        })
        .then(function(res){
            console.log('Limit: ', res.headers['x-ratelimit-limit'], '| Remaining: ', res.headers['x-ratelimit-remaining'], ' | Body: ', res.body);
            done();
        })
        .catch(function(err){
            done(err);
        });
    });
});

// test rate limiting
// Test that the request limit error is logged on the DB
// Test allRequestData middleware
// Test enforceUserId middleware
