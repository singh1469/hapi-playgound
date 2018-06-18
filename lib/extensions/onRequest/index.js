'use strict';

module.exports = (request, h) => {
    request.log(
        request.server.settings.app.logLevel.info,
        [`Incoming request ${request.url.path}`],
    );
    return h.continue;
};
