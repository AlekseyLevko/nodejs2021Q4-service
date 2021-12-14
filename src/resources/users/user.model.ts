import { v4 as uuidv4 } from 'uuid';

class User {
  id;
  name;
  login;
  password;

  constructor({
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  }: {
    name: string;
    login: string;
    password: string;
  }) {
    this.id = uuidv4();
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

export default User;
