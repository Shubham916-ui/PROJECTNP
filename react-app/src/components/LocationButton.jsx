import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/LocationButton.css';

const LocationButton = () => {
  // Direct link to Google Maps search for the business location
  const mapUrl = "https://maps.google.com/maps?q=Shree%20Shyam%20Polymers%2C%20Omsatiya-2%2C%20Padsari%2C%20Bhairahawa%2C%20Nepal";

  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="location-float"
      aria-label="Find Us on Map"
    >
      <FaMapMarkerAlt className="location-icon" />
    </a>
  );
};

export default LocationButton;
