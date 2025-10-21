import express from "express";

import { createFood } from "../resolvers/food/create-food.js";
import { deletedFood } from "../resolvers/food/delete-food.js";
import { getFood } from "../resolvers/food/get-food.js";
import { updatedFood } from "../resolvers/food/update-food.js";

export const foods = express.Router();

foods.get(`/`, getFood);

foods.post(`/`, createFood);

foods.put(`/`, updatedFood);

foods.delete("/", deletedFood);
