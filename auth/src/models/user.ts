import mongoose from 'mongoose';
// An interface that describes the properties
interface UserAttrs {
  email: string,
  password: string
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): any;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.statics.build = (user: UserAttrs) => {
  return new User(user);
};


const User = mongoose.model<UserDoc, UserModel>("User", userSchema);


export { User };