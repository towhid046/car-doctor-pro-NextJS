import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  try {
    const db = await connectDB();
    const query = { _id: new ObjectId(params.id) };
    const service = await db.collection("services").findOne(query);

    return Response.json(service);
  } catch (error) {
    return Response.json({ message: "Data Not found" });
  }
};
