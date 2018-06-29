'use strict'
const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();
const proxyquire = require('proxyquire');
const pluginName = 'myPlugin';

const Plugin = proxyquire('../../../../lib/routes/probe', {
    'handler': {
        isReady: () => {
            return 'ok';
        }
    },
    'path': {
        basename: () => {
            return pluginName
        }
    }
});

describe('Plugin probe', () => {
    // before(() => {});

    // after(() => {});

    it('is an object', () => {
        expect(Plugin).to.be.an.object();
    });

    it('have a property called name', () => {
        expect(Plugin.name).to.equal(pluginName);
    });

    it('has a property called register', () => {
        expect(Plugin.register).to.be.a.function();
    });
});
