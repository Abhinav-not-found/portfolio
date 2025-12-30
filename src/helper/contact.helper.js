
import { toast } from "sonner"

export const handleContactSubmit = async (
  e,
  name,
  email,
  message,
  { setLoading, setName, setEmail, setMessage }
) => {
  e.preventDefault()
  if (!name || !email || !message) {
    toast.error("All fields are required")
  }

  setLoading(true)
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
    const data = await res.json()
    if (res.ok) {
      toast.success(data.message)
      setName("")
      setEmail("")
      setMessage("")
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}


export const handleDelete = async ({ router, data, setLoading }) => {
  setLoading(true)
  try {
    const res = await fetch(`/api/contact/${data._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    if (res.ok) {
      toast.success('Deleted')
      router.refresh()
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
