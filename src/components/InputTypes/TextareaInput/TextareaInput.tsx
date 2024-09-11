import React, { useState, useRef } from 'react';
import { darkTheme } from 'styles/theme';
import { TextareaInputProps } from './types';
import styles from '../../Input/Input.module.css';
import { useTheme } from '../../../hooks/useTheme';
import textareaStyles from './TextareaInput.module.css';

/**
 * TextareaInput component
 *
 * @param {TextareaInputProps} props
 * @returns
 */
export const TextareaInput: React.FC<TextareaInputProps> = ({
    label,
    helpText,
    validationMessage: propValidationMessage,
    characterLimit,
    variant = 'normal',
    inputState: propInputState = 'default',
    onValidate,
    wrapperStyle,
    textareaStyle,
    labelStyle,
    helpTextStyle,
    validationMessageStyle,
    characterCountStyle,
    customClasses = {},
    value: propValue,
    className,
    onChange,
    ...props
}) => {
    // Get the current theme from the context
    const { theme } = useTheme();

    // Initialize the input value state
    // If the propValue is a number, convert it to a string
    // If the propValue is a string, use it as is
    // If the propValue is undefined or null, use an empty string
    const [value, setValue] = useState(() => (propValue as string) || '');

    // Initialize the focused state
    const [isFocused, setIsFocused] = useState(false);

    // Initialize the input state
    // The input state can be one of the following:
    // - default
    // - hover
    // - focus
    // - disabled
    // - readonly
    // - error
    // - success
    // - loading
    const [inputState, setInputState] = useState(propInputState);

    // Initialize the validation message state
    // The validation message is a string that will be displayed
    // if the input value is invalid
    const [validationMessage, setValidationMessage] = useState(propValidationMessage);

    // Get a reference to the textarea element
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Check if the current theme is dark mode
    const isDarkMode = theme.colors.background === darkTheme.colors.background;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Get the new value from the event target
        const newValue = e.target.value;

        // If a character limit is provided and the new value exceeds it, return
        if (characterLimit && newValue.length > characterLimit) return;

        // Set the new value to the state
        setValue(newValue);

        // Call the onChange prop if it's provided
        onChange && onChange(e);

        // If onValidate is provided, call it and set the validation message
        if (onValidate) {
            // Call the onValidate function with the new value
            const validationResult = onValidate(newValue);

            // Set the validation message to the result of the onValidate function
            setValidationMessage(validationResult);

            // Set the input state based on the validation result
            setInputState(validationResult ? 'error' : 'success');
        }
    };

    /**
     * Handles the focus event for the textarea
     * @param e The focus event
     */
    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        /**
         * Set isFocused to true
         */
        setIsFocused(true);

        /**
         * Set the input state to focus
         */
        setInputState('focus');

        /**
         * Call the onFocus prop if it's provided
         */
        props.onFocus && props.onFocus(e);
    };

    /**
     * Handles the blur event for the textarea
     * @param e The blur event
     */
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        // Set isFocused to false
        setIsFocused(false);

        // Set the input state back to the prop inputState
        setInputState(propInputState);

        // Call the onBlur prop if it's provided
        props.onBlur && props.onBlur(e);
    };

    const textareaClassName = `
      /* The base input class */
      ${styles.input}

      /* The textarea specific class */
      ${textareaStyles.textarea}

      /* The variant class */
      ${styles[variant]}

      /* The input state class (e.g. error, success, etc.) */
      ${styles[inputState]}

      /* The focused class */
      ${isFocused ? styles.focused : ''}

      /* The hasValue class */
      ${value ? styles.hasValue : ''}

      /* The dark mode class */
      ${isDarkMode ? styles.darkMode : ''}

      /* The custom class */
      ${customClasses.textarea || ''}

      /* The className prop */
      ${className || ''}
    `;

    // Define the dynamic textarea style
    // It's an object with the following properties:
    // - backgroundColor: the background color of the textarea
    // - color: the text color of the textarea
    // - ...: any other properties provided by the `textareaStyle` prop
    const dynamicTextareaStyle = {
        // Use the background color of the current theme
        backgroundColor: theme.colors.background,

        // Use the text color of the current theme
        color: theme.colors.text,

        // Spread the `textareaStyle` prop into the `dynamicTextareaStyle` object
        // This allows the user to customize the textarea style
        ...textareaStyle,
    };

    {/* The input wrapper element */ }
    return (
        <div
            className={`${styles.inputWrapper} ${styles[variant]} ${customClasses.wrapper || ''}`}
            style={{ ...wrapperStyle, '--primary-color': theme.colors.primary } as React.CSSProperties}
        >
            {/* The label element */}
            {label && (
                <label className={`${styles.label} ${customClasses.label || ''}`} style={labelStyle}>
                    {/* The floating label variant */}
                    {variant === 'floating' ? (
                        <span className={styles.floatingLabel}>{label}</span>
                    ) : (
                        /* The normal label variant */
                        label
                    )}
                </label>
            )}
            {/* The input container element */}
            <div className={styles.inputContainer}>
                {/* The textarea element */}
                <textarea
                    {...props}
                    ref={textareaRef}
                    className={textareaClassName}
                    style={dynamicTextareaStyle}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={inputState === 'disabled'}
                    readOnly={inputState === 'readonly'}
                    aria-invalid={inputState === 'error'}
                    aria-describedby={`${props.id}-help ${props.id}-validation`}
                />
            </div>
            {/* The help text element */}
            {helpText && (
                <p id={`${props.id}-help`} className={`${styles.helpText} ${customClasses.helpText || ''}`} style={helpTextStyle}>
                    {helpText}
                </p>
            )}
            {/* The validation message element */}
            {validationMessage && (
                <p
                    id={`${props.id}-validation`}
                    className={`${styles.validationMessage} ${customClasses.validationMessage || ''}`}
                    style={validationMessageStyle}
                >
                    {validationMessage}
                </p>
            )}
            {/* The character count element */}
            {characterLimit && (
                <p className={`${styles.characterCount} ${customClasses.characterCount || ''}`} style={characterCountStyle}>
                    {value.length}/{characterLimit}
                </p>
            )}
        </div>
    );
};

/**
 * Default export for the TextareaInput component
 */
export default TextareaInput;