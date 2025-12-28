
export const handleContactSubmit = async (e, name, email, message, { setLoading }) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await fetch('/api/contact', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
    const data = await res.json()
    if (res.ok) {
      console.log(data)
    }

  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
