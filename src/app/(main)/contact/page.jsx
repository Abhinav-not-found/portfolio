import ContactForm from "@/components/form/contact-form"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"

export const metadata = {
  title: "Contact | Full-Stack Developer",
  description:
    "Get in touch with Abhinav Kumar, full-stack web developer. Send a message or inquire about projects and services.",
  openGraph: {
    title: "Contact | Full-Stack Developer",
    description: "Reach out to Abhinav Kumar, full-stack web developer.",
    url: "https://yourdomain.com/contact",
    siteName: "Abhinav Kumar",
    type: "website",
  },
}

const Contact = () => {
  return (
    <PublicRoute>
      <Header>Contact</Header>
      <div className="max-w-xl mx-auto px-4 md:px-0">
        <ContactForm/>
      </div>
    </PublicRoute>
  )
}

export default Contact
