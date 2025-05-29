import { validateForm } from '@/lib/validation/validateForm.js';

/**
 * Handles contact form submission logic.
 * @param {Object} form - Form field values
 * @param {string} contactMode - "email" or "phone"
 * @returns {Object} - { success, errors }
 */
export function handleContactFormSubmit(form, contactMode = 'email') {
  const errors = validateForm(form, contactMode);
  if (Object.keys(errors).length > 0) { return { success: false, errors }; }

  console.log('✅ Form submitted:', form);
  return { success: true, errors: {} };
}