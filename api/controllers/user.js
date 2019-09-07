export default class UserController {
  constructor(userModel) {
    this.Users = userModel;
  }

  getUsers(done) {
    this.Users.find({}, done);
  }

  addUser(user, done) {
    const userInstance = new this.Users(user);
    userInstance.save(done);
  }
}
