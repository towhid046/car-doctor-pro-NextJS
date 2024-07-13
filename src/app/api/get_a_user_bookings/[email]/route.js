import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
  const db = await connectDB();
  const filter = { email: params?.email };
  try {
    const bookings = await db.collection("booking").find(filter).toArray();
    return NextResponse.json(bookings)
  } catch (error) {
    return NextResponse.json({message: 'No Data found'})
  }
};