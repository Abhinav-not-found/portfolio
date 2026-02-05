const STORAGE_KEY = "blog_draft"



export const handleCreateBlog = async (
  formdata,
  router,
  { setLoading, toast }
) => {
  setLoading(true)

  try {
    const res = await fetch("/api/blog/create", {
      method: "POST",
      body: formdata,
    })
    const data = await res.json()
    if (!res.ok) {
      switch (data.code) {
        case "FIELDS_REQUIRED":
          toast.error("All fields are required.")
          break

        case "CREATE_BLOG_DISABLED":
          toast.error(data.message)
          break

        case "VALIDATION_ERROR":
          toast.error(data.message)
          break

        default:
          toast.error("Failed to submit feedback.")
      }
      return
    }

    toast.success(data.message)
    router.push("/admin/blogs")
    router.refresh()
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}


export const handleUpdateBlog = async (formData, router, { setLoading, toast }) => {
  try {
    setLoading(true)
    const res = await fetch("/api/blog/update", {
      method: "PUT",
      body: formData,
    })
    
    if (!res.ok) throw new Error()
    const data = await res.json()

    toast.success(data.message)
    router.push("/admin/blogs")
    router.refresh()
  } catch {
    toast.error("Update failed")
  } finally {
    setLoading(false)
  }
}

