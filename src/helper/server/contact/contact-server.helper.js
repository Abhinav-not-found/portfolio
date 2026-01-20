import { connectDB } from "@/lib/db"
import Message from "@/model/message.model"

export const getContacts = async () => {
  await connectDB()
  const data = await Message.find({})
    .sort({ createdAt: -1 })
    .lean()

  return data.map(item => ({
    ...item,
    _id: item._id.toString(),
  }))
}
