/**
 * Service to handle SheetDB API interactions
 */

const SHEET_DB_URL = 'https://sheetdb.io/api/v1/6m995faiclz3w';

/**
 * Submits contact form data to the Google Sheet
 * @param {Object} data - The form data
 * @param {string} data.name - Name
 * @param {string} data.email - Email
 * @param {string} data.phone - Phone
 * @param {string} data.subject - Subject
 * @param {string} data.message - Message
 * @returns {Promise<Object>} - The API response
 */
export const submitContactForm = async (data) => {
    try {
        // Map the data to the columns expected in the sheet (from user screenshot)
        // NAME, EMAIL, PHONE, SUBJECT, MESSAGE
        const payload = {
            NAME: data.name,
            EMAIL: data.email,
            PHONE: data.phone,
            SUBJECT: data.subject,
            MESSAGE: data.message
        };

        const response = await fetch(SHEET_DB_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};
