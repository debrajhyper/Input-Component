import React, { createContext, useState, useEffect } from 'react';
import { Theme, lightTheme, darkTheme } from './theme';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: 'light' | 'dark';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme = 'light' }) => {
    const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    useEffect(() => {
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if (typeof subValue === 'string') {
                        root.style.setProperty(`--${key}-${subKey}`, subValue);
                    }
                });
            } else if (typeof value === 'string') {
                root.style.setProperty(`--${key}`, value);
            }
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};