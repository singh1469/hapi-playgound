'use-strict'
const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();
const asset = require('../../../lib/routes/probe');

describe('math', () => {

    before(() => {});

    after(() => {});

    it('returns properties name, register', () => {
        expect(asset).to.be.an.object();
    });
});
