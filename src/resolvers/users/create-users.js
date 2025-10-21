import { userModel } from "../../model/user-model.js";

export const createUsers = async (req, res) => {
  const dbUser = await userModel.create({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  });

  res.send(`5th User Added`);
};
