const sinon = require('sinon');
const assert = require('assert');
const client = require('./client');
const service = require('./service');


describe('Functions test', ()=> {
    it('should return mocked result', ()=> {
        sinon.stub(service, 'do', ()=>'mockedResult');
        assert.equal(client(), 'mockedResult');
    });
});