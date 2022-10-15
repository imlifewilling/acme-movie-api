const { expect } = require("chai");
const e = require("express");
const app = require('supertest')(require('../app'));
const {syncAndSeed, models} = require('../db');

describe("App", ()=> {
    beforeEach(async()=>{
        await syncAndSeed();
    })
    describe('Home Page', ()=>{
        it('1+1', () => {
            const result = 1+1;
            expect(2).to.equal(result);
        });
    });
    describe('GET Routes', ()=> {
        it('GET "/" Route working', async()=>{
            const response = await app.get('/');
            expect(response.status).to.equal(200);
            expect(response.text).to.contain('HELLO');
        });
        it('GET "/api/movies" working', async()=>{
            const movies = await models.Movie.findAll();
            const response = await app.get('/api/movies');

            //console.log(typeof JSON.parse(response.text));

            const result = JSON.parse(response.text)

            expect(response.status).to.equal(200);
            expect(movies.length).to.equal(result.length);
        });


        it('GET "/api/actors" working', async()=>{
            const actors = await models.Actor.findAll();
            const response = await app.get('/api/actors');

            const result = JSON.parse(response.text);

            expect(response.status).to.equal(200);
            expect(actors.length).to.equal(result.length);
            expect(response.text).to.contain('Tom Hanks');
        });
    })
});