export const handleContactSubmit = (e, { setLoading }) => {
  e.preventDefault()
  setLoading(true)
  try {
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
