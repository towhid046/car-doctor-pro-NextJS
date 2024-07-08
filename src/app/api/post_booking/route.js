
import { connectDB } from '@/lib/connectDB';
export const POST = async (req, res) => {
  const db = await connectDB();
  const bookingCollection = db.collection("booking");
  try {
    const newBooking = await req.json();
    const res = await bookingCollection.insertOne(newBooking);
    return Response.json({ ...res, message: "Success", status: 200 });
  } catch (error) {
    return Response.json({ message: error.message, status: 400 });
  }
};
