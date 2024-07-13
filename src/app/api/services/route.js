import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async() => {
    const db = await connectDB()
    const services = await db.collection('services').find().toArray()
    return NextResponse.json(services)
}