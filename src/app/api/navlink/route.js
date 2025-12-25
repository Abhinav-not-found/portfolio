import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Navlink from "@/model/navlink.model"
import mongoose from "mongoose"

export async function POST(req) {
  try {
    await connectDB()

    const { name, link } = await req.json()

    if (!name || !link) {
      return NextResponse.json(
        { message: "Name and link are required" },
        { status: 400 }
      )
    }

    let normalizedLink = link.trim()

    if (!normalizedLink.startsWith("/")) {
      normalizedLink = `/${normalizedLink}`
    }

    const existingLink = await Navlink.findOne({ link: normalizedLink })
    if (existingLink) {
      return NextResponse.json(
        { message: "Link already exists" },
        { status: 409 }
      )
    }

    const navlink = await Navlink.create({ name, link: normalizedLink })

    return NextResponse.json(
      { message: "Navlink created", navlink },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}


export async function GET(req) {
  try {
    await connectDB()
    const links = await Navlink.find({})
    return NextResponse.json(
      { message: "fetched successfully", links },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}

export async function DELETE(req) {
  try {
    await connectDB()
    const { id } = await req.json()
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid id" },
        { status: 400 }
      )
    }

    const deleted = await Navlink.findByIdAndDelete(id)

    if (!deleted) {
      return NextResponse.json(
        { message: "Navlink not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: "Navlink deleted successfully" },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}


