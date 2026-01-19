import { buildFormData } from "@/lib/formdatabuilder"

export const handleCreateProject = async (e, form, thumbnail, toast, router, { setLoading }) => {

  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch("/api/project/create", {
      method: "POST",
      body: buildFormData(form, thumbnail),
    })

    const data = await res.json()

    if (!res.ok) {
      switch (data.code) {
        case "FIELDS_REQUIRED":
        case "INVALID_TITLE":
        case "INVALID_GITHUB_URL":
        case "INVALID_TECHSTACK":
        case "TECHSTACK_LIMIT":
        case "INVALID_LIVE_URL":
        case "INVALID_THUMBNAIL_TYPE":
        case "VALIDATION_ERROR":
          toast.error(data.message)
          break
        default:
          toast.error(data.message || "Something went wrong")
      }
      return
    }

    toast.success(data.message)
    router.push("/admin/projects")
    router.refresh()
  } catch (error) {
    console.log(error)
    toast.error("Server error")
  } finally {
    setLoading(false)
  }
}
