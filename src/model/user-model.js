import mongoose from "mongoose";

const model = [];

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserShema = new Schema({
  id: ObjectId,
  name: { type: String, require: true },
  email: String,
  phone: Number,
});
export const userModel = mongoose.model("user", UserShema);
