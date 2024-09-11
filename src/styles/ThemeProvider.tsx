import React, { createContext, useState, useEffect } from 'react';
import { Theme, lightTheme, darkTheme } from './theme';

/**
 * ThemeContextType is the type of the context value that the ThemeProvider
 * provides to its children.
 *
 * It includes the current theme and a function to toggle the theme.
 */
export interface ThemeContextType {
    /**
     * The current theme.
     */
    theme: Theme;

    /**
     * A function to toggle the theme.
     *
     * When called, it changes the current theme to the other one.
     */
    toggleTheme: () => void;
}

/**
 * ThemeContext is the context that the ThemeProvider provides to its children.
 *
 * It allows them to access the current theme and toggle it.
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProviderProps is the type of the props that the ThemeProvider accepts.
 *
 * It includes the children, the initial theme and a function to toggle the theme.
 */
interface ThemeProviderProps {
    /**
     * The children of the ThemeProvider.
     */
    children: React.ReactNode;

    /**
     * The initial theme to use.
     *
     * If not provided, it defaults to 'light'.
     */
    initialTheme?: 'light' | 'dark';
}

/**
 * ThemeProvider is a component that provides a theme to its children.
 *
 * It takes the initial theme as a prop and toggles it when the toggleTheme
 * function is called.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme = 'light' }) => {
    /**
     * The current theme.
     */
    const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');

    /**
     * A function to toggle the theme.
     *
     * When called, it changes the current theme to the other one.
     */
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    /**
     * The current theme object.
     */
    const theme = isDarkMode ? darkTheme : lightTheme;

    /**
     * An effect that updates the CSS variables of the theme when the theme
     * changes. It iterates over the theme object and sets the CSS variables of the
     * root element to the corresponding values in the theme object.
     */
    useEffect(() => {
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            // If the value is an object, it is a sub-object of the theme
            // and we need to iterate over the sub-object and set the
            // sub-properties.
            if (typeof value === 'object' && value !== null) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    // If the sub-value is a string, set the corresponding
                    // CSS variable.
                    if (typeof subValue === 'string') {
                        root.style.setProperty(`--${key}-${subKey}`, subValue);
                    }
                });
            } else if (typeof value === 'string') {
                // If the value is a string, set the corresponding CSS
                // variable directly.
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