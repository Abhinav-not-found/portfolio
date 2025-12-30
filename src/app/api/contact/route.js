import { connectDB } from "@/lib/db"
import { NextResponse } from "next/server"
import Message from "@/model/message.model"

export async function POST(req) {
  try {
    await connectDB()

    const { name, email, message } = await req.json()
    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
    })


    return NextResponse.json(
      {
        message: "Message Sent!",
      },
      { status: 201 }
    )


  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      )
    }
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()

    const data = await Message.find({}).sort({ createdAt: -1 })
    return NextResponse.json(
      {
        message: "Fetched successfully",
        data: data
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
