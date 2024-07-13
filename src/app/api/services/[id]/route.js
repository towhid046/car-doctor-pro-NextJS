import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const db = await connectDB();
    const query = { _id: new ObjectId(params.id) };
    const service = await db.collection("services").findOne(query);

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ message: "Data Not found" });
  }
};
