'use strict'
const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();
const server = require('../../../../lib/index.js');

describe('Probe', () => {

    it('/probe/readiness should return a HTTP 200 response', async() => {
        const options = {
            method: 'GET',
            url: '/probe/readiness'
        };
        const response = await server.inject(options);
        expect(response.statusCode).to.equal(200);
    });
});
