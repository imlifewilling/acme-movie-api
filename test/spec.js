const { expect } = require("chai");
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
    describe('GET "/" Route', ()=> {
        it('GET "/" Route working', async()=>{
            const response = await app.get('/');
            expect(response.status).to.equal(200);
            expect(response.text).to.contain('HELLO');
        })
    })
});