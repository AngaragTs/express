import { foodCategoryModel } from "../../model/foodcategory-model.js";

export const GetFoodCategory = async (req, res) => {
  const dbuser = await foodCategoryModel.find();
  res.status(200).json(dbuser);
};
