import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import "./styles/contact.css";
import contact from "../assets/contact.png";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			{/* <Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet> */}

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						{/* <div className="subtitle contact-subtitle">
							<p>Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at <a href="mailto:your_email_here">adityabandariu</a>. I strive to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form on my website to get in touch. Just fill out the required fields, and I'll get back to you as soon as possible. If you prefer to connect on social media, you can find me on Instagram at <a href="https://www.instagram.com/your_instagram_handle_here" target="_blank" rel="noreferrer">your_instagram_handle_here</a>. I regularly share updates and interact with my followers there, so don't hesitate to reach out. Thank you once again for your interest, and I look forward to hearing from you!</p>

						</div> */}
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>
					<img src={contact} className="con"/>

			
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
