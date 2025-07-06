import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Get in Touch</h2>
      <form className="contact__form">
        <label className="contact__label">
          Name{" "}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact__input"
          />
        </label>

        <label className="contact__label">
          Email{" "}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact__input"
          />
        </label>

        <label className="contact__label">
          Subject{" "}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact__input"
          />
        </label>

        <label className="contact__label">
          Message{" "}
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact__textarea"
          ></textarea>
        </label>

        <button className="contact__button" type="submit">
          Send Message
        </button>

        <p className="contact__note">This is a demo contact form</p>
      </form>
    </section>
  );
}

export default Contact;
