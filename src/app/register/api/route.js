import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export const POST = async (request, response) => {
  const newUser = await request.json();
  if (!newUser) {
    return NextResponse.json({ message: "user do't get", status: 400 });
  }
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const isUserExist = await userCollection.findOne({ email: newUser?.email });
    if (isUserExist) {
      return NextResponse.json({ message: "User already exist", status: 304 });
    }
    const hashPassword = bcrypt.hashSync(newUser?.password, 14);

    const res = await userCollection.insertOne({
      ...newUser,
      password: hashPassword,
    });
    return NextResponse.json({ ...res, message: "user added", status: 200 });
  } catch (error) {
    return NextResponse.json({
      error,
      message: "something went wrong",
      status: 400,
    });
  }
};
