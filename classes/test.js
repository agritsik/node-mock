const sinon = require('sinon');
const assert = require('assert');
const client = require('./client');
const service = require('./service');


describe('Classes test', ()=> {
    it('should return mocked result', ()=> {
        assert.equal(client(), 'realResult');
        sinon.stub(service, 'do', ()=>'mockedResult');
        assert.equal(client(), 'mockedResult');
    });
});