import { userModel } from "../../model/user-model.js";
export const updatedUser = async (req, res) => {
  const dbUser = await userModel.findByIdAndUpdate(req.body.id, {
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  });
  res.status(200).json(dbUser);
};
