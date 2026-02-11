import { useState } from 'react';
import { submitContactForm } from '../services/sheetDb';
import Modal from './Modal';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
    });

    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        title: '',
        message: '',
        type: 'success'
    });

    const [notification, setNotification] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
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

        setIsSubmitting(true);

        try {
            await submitContactForm(formData);
            // Show success modal
            setModalConfig({
                isOpen: true,
                title: 'Success!',
                message: 'Your message has been sent successfully. We will get back to you shortly.',
                type: 'success'
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'general',
                message: ''
            });

            // Auto close after 5 seconds if user doesn't close
            // setTimeout(() => {
            //     closeModal();
            // }, 5000);

        } catch (error) {
            // Show error modal
            setModalConfig({
                isOpen: true,
                title: 'Error',
                message: 'Something went wrong. Please try again later.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const showNotification = (message, type) => {
        // Fallback for validation errors or existing notifications
        setNotification({ message, type });
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    };

    const closeModal = () => {
        setModalConfig(prev => ({ ...prev, isOpen: false }));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const formElements = Array.from(e.currentTarget.form.elements).filter(
                el => el.type !== 'submit' && !el.disabled
            );
            const currentIndex = formElements.indexOf(e.target);

            if (e.key === 'ArrowDown' && currentIndex < formElements.length - 1) {
                formElements[currentIndex + 1].focus();
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                formElements[currentIndex - 1].focus();
            }
        }
    };


    return (
        <>
            {notification && (
                <div className={`notification notification-${notification.type} show`}>
                    {notification.message}
                </div>
            )}

            <Modal
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                title={modalConfig.title}
                message={modalConfig.message}
                type={modalConfig.type}
            />

            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your name"
                        disabled={isSubmitting}
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
                        onKeyDown={handleKeyDown}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
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
                        onKeyDown={handleKeyDown}
                        placeholder="+977-XXX-XXXXXX"
                        disabled={isSubmitting}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        disabled={isSubmitting}
                    >
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
                        onKeyDown={handleKeyDown}
                        rows="5"
                        placeholder="Write your message here..."
                        disabled={isSubmitting}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </>
    );
};

export default ContactForm;
