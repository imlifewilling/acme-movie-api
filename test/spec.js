const { expect } = require("chai")

describe("App", ()=> {
    describe('Home Page', ()=>{
        it('1+1', () => {
            const result = 1+0;
            expect(2).to.equal(result);
        });
    });
});