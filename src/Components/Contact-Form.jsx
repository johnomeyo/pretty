export const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form">
        <form action="">
          <h1>We cant wait to hear your ideas!!</h1>
          <input type="text" placeholder="Your name" name="name" required />
          <br />
          <input type="email" placeholder="Your email" name="email" required />
          <br />
          <textarea
            name="message"
            placeholder="Share your thoughts with us"
          ></textarea>
          <br />
          <button type="submit">Send</button>
          <br />
          <p>
            By pressing the button you accept the Terms and Conditions and
            acknowledge reading Privacy Policy.
          </p>
        </form>
      </div>
      <div className="image">
        <img
        src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};
