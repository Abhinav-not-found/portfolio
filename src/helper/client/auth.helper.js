export const handleSubmit = async (e, { setLoading, router }, email, password) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (res.ok) {
      router.push("/admin/dashboard")
    } else {
      console.log("Login failed:", data.message)
    }
  } catch (error) {
    console.log("Error logging in:", error)
  } finally {
    setLoading(false)
  }
}

export const handleLogout = async ({ setLoading, router }) => {
  setLoading(true)
  try {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    if (res.ok) {
      router.push("/")
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
