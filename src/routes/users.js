import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { createUsers } from "../resolvers/users/create-users.js";
import { updatedUser } from "../resolvers/users/update-users.js";
import { deletedUsers } from "../resolvers/users/delete-users.js";
import { userModel } from "../model/user-model.js";

export const router = express.Router();

router.get(`/`, getUsers);

router.post(`/`, createUsers);

router.put(`/`, updatedUser);

router.delete("/", deletedUsers);
