import { userModel } from "../../model/user-model.js";
export const deletedUsers = async (req, res) => {
  const dbUser = await userModel.findByIdAndDelete(req.body.id, {
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  });
  res.status(200).json(dbUser);
};
