export default class UserController {
  constructor(userModel) {
    this.Users = userModel;
  }

  getUsers(done) {
    this.Users.find({}, { password: 0 }, done);
  }

  addUser(user, done) {
    const userInstance = new this.Users(user);
    userInstance.save(done);
  }
}
