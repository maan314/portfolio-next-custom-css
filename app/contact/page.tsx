
const contact = () => {
    return (
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
          Get in touch today to discuss your project needs or any inquiries. <br /> We are here to provide personalized assistance and expert solutions to bring your digital ideas to life. <br /> Reach out now!
        </p>
        <div className="contact-content">
          <div className="contact-form">
            <input type="text" placeholder="Name" className="contact-input" />
            <input type="email" placeholder="Email" className="contact-input" />
            <input type="text" placeholder="Phone" className="contact-input" />
            <textarea name="message" id="message" rows={3} placeholder="Message" className="contact-textarea"></textarea>
            <button className="contact-button">Send Message</button>
          </div>
          <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6634.369203196364!2d67.14546655786418!3d24.9519782835029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3387e331d21ed%3A0x5c7ff7406be15b3d!2sChapal%20Sun%20City%20Main%20Road%2C%20Gulzar-e-Hijri%20Gulzar%20E%20Hijri%20Scheme%2033%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731250856236!5m2!1sen!2s" width="600" height="450" loading="lazy" >
          </iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default contact