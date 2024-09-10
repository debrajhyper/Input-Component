export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
export const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const validateEmail = (email: string): string | null => {
    return emailRegex.test(email) ? null : 'Please enter a valid email address';
};

export const validateUrl = (url: string): string | null => {
    return urlRegex.test(url) ? null : 'Please enter a valid URL';
};

export const validatePhone = (phone: string): string | null => {
    return phoneRegex.test(phone) ? null : 'Please enter a valid phone number';
};

export const validateRequired = (value: string): string | null => {
    return value.trim() !== '' ? null : 'This field is required';
};

export const validateNumber = (min: number | undefined, max: number | undefined, value: string | number | readonly string[]) => {
    const numValue = typeof value === 'number' ? value : Number(Array.isArray(value) ? value[0] : value);

    if (isNaN(numValue)) return 'Please enter a valid number';
    if (min !== undefined && numValue < min) return `Value must be at least ${min}`;
    if (max !== undefined && numValue > max) return `Value must be at most ${max}`;
    return null;
};