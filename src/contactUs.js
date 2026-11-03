import { useState } from 'react'

export function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return <section className="contact-page">
    <div className="contact-intro">
      <p className="section-kicker">Contact us</p>
      <h1>Let’s start a<br /><em>conversation.</em></h1>
      <p className="contact-email-label">Email</p>
      <a className="contact-email" href="mailto:cots@ucsc.cmb.ac.lk">cots@ucsc.cmb.ac.lk</a>
      <p className="contact-description">If you have any questions or inquiries feel free to send us.</p>
    </div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
      <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
      <label>Subject<input name="subject" type="text" placeholder="How can we help?" required /></label>
      <label>Message<textarea name="message" rows="6" placeholder="Type your message here" required /></label>
      <button className="button button-dark" type="submit">Send message <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" /></svg></button>
      {submitted && <p className="form-success" role="status">Thank you. Your message is ready to be sent to the COTS Research Group.</p>}
    </form>
  </section>
}
