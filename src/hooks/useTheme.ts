import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../styles/ThemeProvider';

/**
 * This hook allows you to access the current theme and the toggleTheme
 * function from anywhere in your app.
 *
 * It will throw an error if there is no ThemeProvider in the component
 * tree.
 */
export const useTheme = (): ThemeContextType => {
    /**
     * Get the context from the ThemeContext
     */
    const context = useContext(ThemeContext);

    /**
     * Throw an error if there is no ThemeProvider in the component tree
     */
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    /**
     * Return the context
     */
    return context;
};