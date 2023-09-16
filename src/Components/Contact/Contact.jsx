import React, { useRef } from "react";

//Email]Js
import emailjs from "emailjs-com";

//Icons
import { MdOutlineMail } from "react-icons/md";
//import { BsWhatsapp } from "react-icons/bs";

//Style
import "./Contact.style.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_hg47l9q",
			"template_cx7sher",
			form.current,
			"YaRRLMBxZx7mxnNwG"
		);

		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMail className="contact__option.icon" />
						<h4>Email</h4>
						<h5>luis_28_92lara@hotmail.com</h5>
						<a href="mailto:luis_28_92lara@hotmail.com">Send a message</a>
					</article>

					{/* <article className="contact__option">
            <BsWhatsapp className="contact__option.icon" />
            <h4>Whatsapp</h4>
            <h5>(+52) 461-546-9608</h5>
            <a href="https://api.whatsapp.com/send?phone=+524615469608">
              Send a message
            </a>
          </article> */}
				</div>
				{/*END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
