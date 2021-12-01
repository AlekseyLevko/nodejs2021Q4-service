const fastify = require('fastify')({ logger: false });
fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/doc',
  swagger: {
    info: { title: 'fastify-api' },
  },
});
fastify.register(require('./resources/users/user.router'));

module.exports = fastify;
