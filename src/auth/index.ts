import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';
import { config } from '../common/config';

const authorization = (req: FastifyRequest, reply: FastifyReply) => {
  if (['/', '/doc', '/login'].some((url) => req.url === url)) {
    return;
  }

  if (!['/users', '/boards'].some((url) => req.url.startsWith(url))) {
    return;
  }

  if (!req.headers.authorization) {
    reply.code(401).send();
  }

  if (req.headers.authorization) {
    const token = req.headers.authorization.slice(7);
    jwt.verify(token, config.SECRET_KEY, (err) => {
      if (err) {
        req.log.error(err);
        reply.code(401).send();
      }
    });
  }
};

export { authorization };
