import { v4 as uuidv4 } from 'uuid';

/**
 * User class
 */
class User {
  id;
  name;
  login;
  password;

  /**
   *
   * @param user - data to create new user
   */
  constructor(user: { name: string; login: string; password: string }) {
    this.id = uuidv4();
    this.name = user.name;
    this.login = user.login;
    this.password = user.password;
  }
}

export default User;
