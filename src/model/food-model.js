import mongoose from "mongoose";
const model = [];

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodShema = new Schema({
  id: ObjectId,
  foodname: { type: String, require: true },
  price: Number,
  image: String,
  ingredients: String,
  category: String,
  createdAt: Date,
  updatedAt: Date,
});
export const foodModel = mongoose.model("food", foodShema);
