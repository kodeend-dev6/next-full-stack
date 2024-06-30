import mongoose, { Schema, Document } from "mongoose";

export interface IMessages extends Document {
  content: string;
  createdAt: Date;
}

const MessagesSchema: Schema<IMessages> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  verfyCode: string;
  verfyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  isVerified: boolean;
  messages: IMessages[];
}

const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verfyCode: {
    type: String,
    required: [true, "Verification code is required"],
  },
  verfyCodeExpiry: {
    type: Date,
    required: [true, "Verification code expiry is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessagesSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);

export default UserModel;
