import { connectDB } from "@/lib/connectDB";
export const GET = async (req, {params}) => {
  const db = await connectDB();
  const filter = { email: params?.email };
  try {
    const bookings = await db.collection("booking").find(filter).toArray();
    return Response.json(bookings)
  } catch (error) {
    return Response.json({message: 'No Data found'})
  }
};