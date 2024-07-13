import { connectDB } from "@/lib/connectDB";
import { ObjectId } from 'mongodb';
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const db = await connectDB();
  const query = { _id: new ObjectId(params?.id) };
  try {
    const result = await db.collection("booking").deleteOne(query);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ status: false });
  }
};
