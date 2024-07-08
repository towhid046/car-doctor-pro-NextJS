import { connectDB } from "@/lib/connectDB";
import { ObjectId } from 'mongodb';
export const DELETE = async (req, { params }) => {
  const db = await connectDB();
  const query = { _id: new ObjectId(params?.id) };
  try {
    const result = await db.collection("booking").deleteOne(query);
    return Response.json(result);
  } catch (error) {
    return Response.json({ status: false });
  }
};
