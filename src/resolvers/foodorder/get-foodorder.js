import { FoodOrderModel } from "../../model/foodorder-model.js";

export const GetFoodOrder = async (req, res) => {
  const dbuser = await FoodOrderModel.find();
  res.status(200).json(dbuser);
};
