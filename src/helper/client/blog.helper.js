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
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

