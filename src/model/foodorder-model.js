import mongoose from "mongoose";

const model = [];

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserShema = new Schema({
  id: ObjectId,
  user: ObjectId,
  totalPrice: Number,

  createdAt: Date,
  updatedAt: Date,
});
export const FoodOrderModel = mongoose.model("FoodOrder", UserShema);
