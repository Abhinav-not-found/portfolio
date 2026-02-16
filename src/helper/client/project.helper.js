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


export const handleUpdateProject = async (
  id,
  form,
  thumbnail,
  toast,
  router,
  { setLoading }
) => {
  try {
    setLoading(true)

    const formData = new FormData()

    formData.append("title", form.title)
    formData.append("desc", form.desc)
    formData.append("content", form.content)
    formData.append("github", form.github)
    formData.append("live", form.live)
    formData.append("featured", String(form.featured))
    formData.append("latest", String(form.latest))

    // techstack array
    form.techstack.forEach((tech) => {
      formData.append("techstack", tech)
    })

    // optional thumbnail update
    if (thumbnail) {
      formData.append("thumbnail", thumbnail)
    }

    const res = await fetch(`/api/project/${id}`, {
      method: "PUT",
      body: formData,
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong")
    }

    toast.success("Project updated successfully")

    router.push(`/projects/${data.slug}`)
    router.refresh()
  } catch (error) {
    toast.error(error.message || "Failed to update project")
  } finally {
    setLoading(false)
  }
}
