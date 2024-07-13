
import { connectDB } from '@/lib/connectDB';
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const db = await connectDB();
  const bookingCollection = db.collection("booking");
  try {
    const newBooking = await req.json();
    const res = await bookingCollection.insertOne(newBooking);
    return NextResponse.json({ ...res, message: "Success", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 400 });
  }
};
