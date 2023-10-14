import User from "@/models/userMode";
export default async function isUserExist(email: string) {
  const user = await User.findOne({ email }).select("_id");
  return user;
}
