import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request, response) => {
  const newUser = await request.json();
  if (!newUser) {
    return Response.json({ message: "user do't get", status: 400 });
  }
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const isUserExist = await userCollection.findOne({ email: newUser?.email });
    if (isUserExist) {
      return Response.json({ message: "User already exist", status: 304 });
    }
    const hashPassword = bcrypt.hashSync(newUser?.password, 14);

    const res = await userCollection.insertOne({
      ...newUser,
      password: hashPassword,
    });
    return Response.json({ ...res, message: "user added", status: 200 });
  } catch (error) {
    return Response.json({
      error,
      message: "something went wrong",
      status: 400,
    });
  }
};
