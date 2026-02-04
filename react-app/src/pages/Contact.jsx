import ContactForm from '../components/ContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-gradient"></div>
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">We'd love to hear from you</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-wrapper">
                            <h2>Send Us a Message</h2>
                            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                            <ContactForm />
                        </div>

                        <div className="contact-info-wrapper">
                            <h2>Contact Information</h2>
                            <div className="contact-methods">
                                <ContactMethod
                                    icon={<FaMapMarkerAlt />}
                                    title="Our Location"
                                    content={<>Omsatiya-2, (Padsari)<br />Bhairahawa, Nepal</>}
                                />
                                <ContactMethod
                                    icon={<FaPhoneAlt />}
                                    title="Phone"
                                    content="071 421042"
                                />
                                <ContactMethod
                                    icon={<FaEnvelope />}
                                    title="Email"
                                    content="shyampolynepal@gmail.com"
                                />
                                <ContactMethod
                                    icon={<FaClock />}
                                    title="Business Hours"
                                    content="Monday - Saturday: 9:00 AM - 6:00 PM"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ContactMethod = ({ icon, title, content }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className="contact-method"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
        >
            <div className="contact-icon">{icon}</div>
            <div className="contact-details">
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Contact;
