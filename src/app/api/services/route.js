import { connectDB } from "@/lib/connectDB"

export const GET = async() => {
    const db = await connectDB()
    const services = await db.collection('services').find().toArray()
    return Response.json(services)
}