import { connectDB } from "@/lib/db"
import Message from "@/model/message.model"
import { NextResponse } from "next/server"

export async function DELETE(req, { params }) {
  try {
    await connectDB()
    const { id } = await params
    if (!id) {
      return NextResponse.json(
        { message: "Message ID is required" },
        { status: 400 }
      )
    }

    const deleted = await Message.findByIdAndDelete(id)
    if (!deleted) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: "Message deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
