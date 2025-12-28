import ContactForm from "@/components/general/contact-form"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"

const Contact = () => {
  return (
    <PublicRoute>
      <Header>Contact</Header>
      <div className="max-w-xl mx-auto">
        <ContactForm/>
      </div>
    </PublicRoute>
  )
}

export default Contact
