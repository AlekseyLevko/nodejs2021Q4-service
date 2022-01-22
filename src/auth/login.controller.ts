import { FastifyReply, FastifyRequest } from 'fastify';
import { loginService } from './login.service';

type CustomRequest = FastifyRequest<{
  Body: {
    login: string;
    password: string;
  };
}>;

const addToken = async (
  req: CustomRequest,
  reply: FastifyReply
): Promise<void> => {
  const { login, password } = req.body;

  const token = await loginService.addToken(login, password);
  if (!token) {
    reply
      .code(403)
      .send({ message: 'User with these credentials was not found' });
  }
  reply.send({ token });
};

export { addToken };
