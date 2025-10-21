import { foodModel } from "../../model/food-model.js";

export const createFood = async (req, res) => {
  const dbUser = await foodModel.create(req.body.id, {
    foodname: req.body.name,
    price: req.body.price,
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbUser);
};
