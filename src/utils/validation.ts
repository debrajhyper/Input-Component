/**
 * Matches most common email address formats
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**
 * Matches most common URL formats
 */
export const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
/**
 * Matches most common phone number formats
 */
export const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

/**
 * Validates an email address
 * @param email The email address to validate
 * @returns An error message if the email is invalid, or null if valid
 */
export const validateEmail = (email: string): string | null => {
    /**
     * Matches most common email address formats
     */
    return emailRegex.test(email) ? null : 'Please enter a valid email address';
};

/**
 * Validates a URL
 * @param url The URL to validate
 * @returns An error message if the URL is invalid, or null if valid
 */
export const validateUrl = (url: string): string | null => {
    /**
     * Matches most common URL formats
     */
    return urlRegex.test(url) ? null : 'Please enter a valid URL';
};

/**
 * Validates a phone number
 * @param phone The phone number to validate
 * @returns An error message if the phone number is invalid, or null if valid
 */
export const validatePhone = (phone: string): string | null => {
    /**
     * Matches most common phone number formats
     */
    return phoneRegex.test(phone) ? null : 'Please enter a valid phone number';
};

/**
 * Validates if a value is required
 * @param value The value to validate
 * @returns An error message if the value is invalid, or null if valid
 */
export const validateRequired = (value: string): string | null => {
    /**
     * Returns an error message if the value is not truthy
     */
    return value.trim() !== '' ? null : 'This field is required';
};

/**
 * Validates a number input within a given range
 * @param min Minimum allowed value
 * @param max Maximum allowed value
 * @param value The value to validate
 * @returns An error message if the value is invalid, or null if valid
 */
export const validateNumber = (min: number | undefined, max: number | undefined, value: string | number | readonly string[]) => {
    const numValue = typeof value === 'number' ? value : Number(Array.isArray(value) ? value[0] : value);

    if (isNaN(numValue)) return 'Please enter a valid number';
    if (min !== undefined && numValue < min) return `Value must be at least ${min}`;
    if (max !== undefined && numValue > max) return `Value must be at most ${max}`;
    return null;
};