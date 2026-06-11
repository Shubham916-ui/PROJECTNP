import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import '../styles/CallButton.css';

const CallButton = () => {
  const phoneNumber = "+9779857016362";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="call-float"
      aria-label="Call Now"
    >
      <FaPhoneAlt className="call-icon" />
    </a>
  );
};

export default CallButton;
