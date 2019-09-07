import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  password: String,
});

// eslint-disable-next-line func-names
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) next();
  else {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) next(err);

      else {
        // eslint-disable-next-line no-shadow
        bcrypt.hash(user.password, salt, null, (err, hash) => {
          if (err) next(err);
          else {
            user.password = hash;
            next();
          }
        });
      }
    });
  }
});

const User = mongoose.model('User', userSchema);

export default User;
