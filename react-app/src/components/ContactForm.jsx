import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
    });

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Success
        showNotification('Thank you! We will contact you soon.', 'success');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: 'general',
            message: ''
        });
    };

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    return (
        <>
            {notification && (
                <div className={`notification notification-${notification.type} show`}>
                    {notification.message}
                </div>
            )}

            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+977-XXX-XXXXXX"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" value={formData.subject} onChange={handleChange}>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="product">Product Information</option>
                        <option value="support">Customer Support</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Write your message here..."
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large">Send Message</button>
            </form>
        </>
    );
};

export default ContactForm;
