export const buildFormData = (form, thumbnail) => {
  const formData = new FormData()
  Object.entries(form).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value))
    } else {
      formData.append(key, String(value))
    }
  })
  if (thumbnail) formData.append("thumbnail", thumbnail)
  return formData
}
