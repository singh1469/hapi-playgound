'use strict'
const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();
const Handler = require('../../../../lib/routes/probe/handler.js');

describe('Handler probe', () => {
    // before(() => {});

    // after(() => {});

    it('is an object', () => {
        expect(Handler).to.be.an.object();
    });

    it('has a property called method', () => {
        expect(Handler.isReady).to.be.a.function();
    });

    it('isReady returns JSON', () => {
        expect(Handler.isReady()).to.be.equal({
            status: 'UP'
        });
    });
});
