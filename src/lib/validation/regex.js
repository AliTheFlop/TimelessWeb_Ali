export const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  
export const isValidMobile = (phone) =>
    /^(\+61|0)[2-4789]\d{8}$/.test(phone.replace(/\s+/g, ''));
  
export const isValidSubject = (subject) =>
    typeof subject === 'string' && subject.length > 0;
  
export const isValidMessage = (msg) =>
    msg.trim().length >= 10;  