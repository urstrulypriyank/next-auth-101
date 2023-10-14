import mongoose, { mongo } from "mongoose";
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: true,
  },
  fullname: {
    type: String,
    required: [true, "Please Provide fullname"],
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToke: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User;
