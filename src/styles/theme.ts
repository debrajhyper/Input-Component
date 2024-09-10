export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        secondaryRGB: string;
        text: string;
        error: string;
        success: string;
        disabled: string;
    };
    fonts: {
        body: string;
        heading: string;
    };
    fontSizes: {
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
    };
    spacing: {
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
    };
    borderRadius: {
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
    };
}

export const lightTheme: Theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        secondaryRGB: '108, 117, 125',
        background: '#ffffff',
        text: '#333333',
        error: '#f62539',
        success: '#09c729',
        disabled: '#e9ecef',
    },
    fonts: {
        body: 'Arial, sans-serif',
        heading: 'Georgia, serif',
    },
    fontSizes: {
        extraSmall: '0.5rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        extraLarge: '2rem',
    },
    spacing: {
        extraSmall: '0.2rem',
        small: '0.6rem',
        medium: '1rem',
        large: '1.5rem',
        extraLarge: '2rem',
    },
    borderRadius: {
        extraSmall: '0.25rem',
        small: '0.25rem',
        medium: '0.5rem',
        large: '1rem',
        extraLarge: '2rem',
    },
};

export const darkTheme: Theme = {
    ...lightTheme,
    colors: {
        primary: '#4dabf7',
        secondary: '#ced4da',
        secondaryRGB: '206, 212, 218',
        background: '#242424',
        text: '#f8f9fa',
        error: '#ba0012',
        success: '#13f639',
        disabled: '#495057',
    },
};