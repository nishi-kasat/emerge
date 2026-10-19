export const WHATSAPP_CONFIG = {
  businessWhatsAppNumber: "919321260123",
  displayWhatsAppNumber: "+91 93212 60123",
  telephoneNumbers: [
    { display: "+91 98672 60123", raw: "919867260123", telUri: "tel:+919867260123" },
    { display: "+91 92727 97123", raw: "919272797123", telUri: "tel:+919272797123" }
  ],
  locations: ["Palghar", "Virar", "Bhayandar"],
  brandName: "Kasat's Emerge India & Overseas"
};

/**
 * Creates standard WhatsApp click-to-chat URL with properly encoded message
 * @param {string} [customMessage]
 * @returns {string}
 */
export function buildWhatsAppUrl(customMessage) {
  const number = WHATSAPP_CONFIG.businessWhatsAppNumber;
  const defaultText = `Hello Emerge India & Overseas, I would like to enquire about admission guidance and course options.`;
  const text = customMessage && customMessage.trim() ? customMessage.trim() : defaultText;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates course-specific WhatsApp inquiry URL
 * @param {string} courseName
 * @param {string} [abbreviation]
 * @returns {string}
 */
export function buildCourseInquiryUrl(courseName, abbreviation) {
  const courseLabel = abbreviation ? `${courseName} (${abbreviation})` : courseName;
  const message = `Hello Emerge India & Overseas, I would like to enquire about ${courseLabel} admission options and guidance.`;
  return buildWhatsAppUrl(message);
}

/**
 * Creates destination-specific WhatsApp inquiry URL
 * @param {string} countryName
 * @returns {string}
 */
export function buildDestinationInquiryUrl(countryName) {
  const message = `Hello Emerge India & Overseas, I would like to enquire about study options, universities, and admission processes in ${countryName}.`;
  return buildWhatsAppUrl(message);
}

/**
 * Creates institute-specific WhatsApp inquiry URL
 * @param {string} instituteName
 * @returns {string}
 */
export function buildInstituteInquiryUrl(instituteName) {
  const message = `Hello Emerge India & Overseas, I would like to enquire about admission guidance for ${instituteName}.`;
  return buildWhatsAppUrl(message);
}

/**
 * Builds contact form inquiry message for WhatsApp handoff
 * @param {{ fullName: string, phone: string, email: string, course: string, destination: string, message: string }} formData
 * @returns {string}
 */
export function buildContactFormWhatsAppUrl(formData) {
  const messageLines = [
    `Hello Emerge India & Overseas,`,
    ``,
    `My name is ${formData.fullName.trim()}.`,
    ``,
    `I would like information about:`,
    `Course: ${formData.course ? formData.course.trim() : "Not specified"}`,
    `Preferred Destination: ${formData.destination ? formData.destination.trim() : "Not specified"}`,
    ``,
    `Phone: ${formData.phone.trim()}`,
    `Email: ${formData.email ? formData.email.trim() : "Not provided"}`,
    ``,
    formData.message && formData.message.trim() ? `Message: ${formData.message.trim()}` : `Message: Please provide counselling and admission assistance.`,
    ``,
    `Please guide me regarding the admission process.`
  ];

  return buildWhatsAppUrl(messageLines.join("\n"));
}

/**
 * Open external URL safely in new window
 * @param {string} url
 */
export function openExternalUrl(url) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
