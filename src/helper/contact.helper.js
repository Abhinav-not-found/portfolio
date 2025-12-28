import { toast } from "sonner"

export const handleContactSubmit = async (
  e,
  name,
  email,
  message,
  { setLoading, setName, setEmail, setMessage }
) => {
  if (!name || !email || !message) {
    toast.error("All fields are required")
  }

  e.preventDefault()
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
