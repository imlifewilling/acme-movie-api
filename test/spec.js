const { expect } = require("chai");
const app = require('supertest')(require('../app'));

describe("App", ()=> {
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