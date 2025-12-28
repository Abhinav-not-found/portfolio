import ContactForm from "@/components/general/contact-form"
import Header from "@/components/general/header"

const Contact = () => {
  return (
    <main className=''>
      <Header>Contact</Header>
      <div className="max-w-xl mx-auto">
        <ContactForm/>
      </div>
    </main>
  )
}

export default Contact
