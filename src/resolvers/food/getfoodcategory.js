import { foodModel } from "../../model/food-model.js";

export const GetFoodCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const dbuser = await foodModel.findById({ category: categoryId });
  res.status(200).json(dbuser);
};
