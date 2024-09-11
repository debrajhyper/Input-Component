import React, { useState, useRef } from 'react';
import { InputProps } from './types';
import styles from './Input.module.css';
import { darkTheme } from 'styles/theme';
import { IconX } from '@tabler/icons-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Input component
 *
 * @param {InputProps} props
 * @returns
 */
export const Input: React.FC<InputProps> = ({
    label,
    helpText,
    icon,
    clearable,
    validationMessage: propValidationMessage,
    characterLimit,
    prefix,
    suffix,
    fileUploadText,
    variant = 'normal',
    inputState: propInputState = 'default',
    onValidate,
    mask,
    wrapperStyle,
    inputStyle,
    labelStyle,
    helpTextStyle,
    validationMessageStyle,
    characterCountStyle,
    prefixStyle,
    suffixStyle,
    customClasses = {},
    value: propValue,
    className,
    onChange,
    placeholder,
    ...props
}) => {
    // Get the current theme from the context
    const { theme } = useTheme();

    // Initialize the input value state
    // If the propValue is a number, convert it to a string
    // If the propValue is a string, use it as is
    // If the propValue is undefined or null, use an empty string
    const [value, setValue] = useState(() => {
        if (typeof propValue === 'number') {
            return propValue.toString();
        }
        return (propValue as string) || '';
    });

    // Initialize the focused state
    const [isFocused, setIsFocused] = useState(false);

    // Initialize the input state
    const [inputState, setInputState] = useState(propInputState);

    // Initialize the validation message state
    const [validationMessage, setValidationMessage] = useState(propValidationMessage);

    // Initialize the input ref
    const inputRef = useRef<HTMLInputElement>(null);

    // Determine if the theme is dark mode
    const isDarkMode = theme.colors.background === darkTheme.colors.background;

    /**
     * Handles the change event for the input
     * @param e The change event
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Get the new value from the event target
        let newValue = e.target.value;

        // If a mask is provided, apply it to the new value
        if (mask) {
            newValue = mask(newValue);
        }

        // If a character limit is provided and the new value exceeds it, return
        if (characterLimit && newValue.length > characterLimit) return;

        // Set the new value to the state
        setValue(newValue);

        // Call the onChange prop if it's provided
        onChange && onChange(e);

        // If onValidate is provided, call it and set the validation message
        if (onValidate) {
            const validationResult = onValidate(newValue);
            setValidationMessage(validationResult);
            // Set the input state based on the validation result
            setInputState(validationResult ? 'error' : 'success');
        }
    };

    /**
     * Handles the focus event for the input
     * @param e The focus event
     */
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        // Set isFocused to true
        setIsFocused(true);
        // Set the input state to focus
        setInputState('focus');
        // Call the onFocus prop if it's provided
        props.onFocus && props.onFocus(e);
    };

    /**
     * Handles the blur event for the input
     * @param e The blur event
     */
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        // Set isFocused to false
        setIsFocused(false);
        // Set the input state back to the prop inputState
        setInputState(propInputState);
        // Call the onBlur prop if it's provided
        props.onBlur && props.onBlur(e);
    };

    /**
     * Handles the clear event for the input
     */
    const handleClear = () => {
        // Clear the value
        setValue('');
        // Focus the input
        inputRef.current?.focus();
    };

    const inputClassName = `
    /* base input styles */
    ${styles.input}
    /* variant styles */
    ${styles[variant]}
    /* input state styles */
    ${styles[inputState]}
    /* focus styles */
    ${isFocused ? styles.focused : ''}
    /* value styles */
    ${value ? styles.hasValue : ''}
    /* prefix and suffix styles */
    ${prefix || icon ? styles.hasPrefix : ''}
    ${suffix || (clearable && value) ? styles.hasSuffix : ''}
    /* dark mode styles */
    ${isDarkMode ? styles.darkMode : ''}
    /* readonly and loading styles */
    ${inputState === 'readonly' ? styles.readonly : ''}
    ${inputState === 'loading' ? styles.loading : ''}
    /* custom styles */
    ${customClasses.input || ''}
    ${className || ''}
  `;

    const dynamicInputStyle = {
        ...inputStyle,
        /* Prefix and suffix padding adjustments */
        paddingLeft: prefix && icon ? 'calc(var(--spacing-medium) * 2 + 30px)' : prefix || icon ? 'calc(var(--spacing-medium) * 2 + 10px)' : undefined,
        paddingRight: suffix && clearable && value ? 'calc(var(--spacing-medium) * 2 + 45px)' : suffix || (clearable && value) ? 'calc(var(--spacing-medium) * 2 + 10px)' : undefined,
        /* base styles */
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
    };

    {/* Input wrapper container */ }
    return (
        <div
            className={`${styles.inputWrapper} ${customClasses.wrapper || ''}`}
            style={{ ...wrapperStyle, '--primary-color': theme.colors.primary } as React.CSSProperties}
        >
            {/* Label */}
            {label && (
                <label className={`${styles.label} ${customClasses.label || ''}`} style={labelStyle}>
                    {/* Floating label */}
                    {variant === 'floating' ? (
                        <span className={styles.floatingLabel}>{label}</span>
                    ) : (
                        label
                    )}
                </label>
            )}
            {/* Input container */}
            <div className={`${styles.inputContainer} ${customClasses.inputWrapper || ''}`}>
                {/* Prefix and icon */}
                {(prefix || icon) && (
                    <span className={styles.prefixContainer}>
                        {/* Prefix */}
                        {prefix && (
                            <span className={`${styles.prefix} ${customClasses.prefix || ''}`} style={prefixStyle}>
                                {prefix}
                            </span>
                        )}
                        {/* Icon */}
                        {icon && <span className={styles.icon}>{icon}</span>}
                    </span>
                )}
                {/* Input element */}
                <input
                    {...props}
                    ref={inputRef}
                    className={inputClassName}
                    style={dynamicInputStyle}
                    value={value}
                    onChange={inputState !== 'readonly' && inputState !== 'loading' ? handleChange : undefined}
                    onFocus={inputState !== 'readonly' && inputState !== 'loading' ? handleFocus : undefined}
                    onBlur={inputState !== 'readonly' && inputState !== 'loading' ? handleBlur : undefined}
                    disabled={inputState === 'disabled' || inputState === 'loading'}
                    readOnly={inputState === 'readonly'}
                    placeholder={variant !== 'floating' ? placeholder : undefined}
                    aria-readonly={inputState === 'readonly'}
                    aria-invalid={inputState === 'error'}
                    aria-describedby={`${props.id}-help ${props.id}-validation`}
                />
                {/* Loading spinner */}
                {inputState === 'loading' && (
                    <div className={styles.loadingSpinner}></div>
                )}
                {/* File upload text */}
                {
                    fileUploadText && (
                        <span className={`${styles.fileUploadText} ${customClasses.fileUploadText || ''}`}>
                            {fileUploadText}
                        </span>
                    )
                }
                {/* Suffix and clear button */}
                {(suffix || (clearable && value)) && (
                    <span className={styles.suffixContainer}>
                        {/* Clear button */}
                        {clearable && value && (
                            <button className={styles.clearButton} onClick={handleClear} aria-label="Clear input">
                                <IconX size={18} />
                            </button>
                        )}
                        {/* Suffix */}
                        {suffix && (
                            <span className={`${styles.suffix} ${customClasses.suffix || ''}`} style={suffixStyle}>
                                {suffix}
                            </span>
                        )}
                    </span>
                )}
            </div>
            {/* Help text */}
            {helpText && (
                <p id={`${props.id}-help`} className={`${styles.helpText} ${customClasses.helpText || ''}`} style={helpTextStyle}>
                    {helpText}
                </p>
            )}
            {/* Validation message */}
            {validationMessage && (
                <p
                    id={`${props.id}-validation`}
                    className={`${styles.validationMessage} ${customClasses.validationMessage || ''}`}
                    style={validationMessageStyle}
                >
                    {validationMessage}
                </p>
            )}
            {/* Character count */}
            {characterLimit && (
                <p className={`${styles.characterCount} ${customClasses.characterCount || ''}`} style={characterCountStyle}>
                    {value.length}/{characterLimit}
                </p>
            )}
        </div>
    );
};