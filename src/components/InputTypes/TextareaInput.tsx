import React, { useState, useRef, TextareaHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from '../Input/Input.module.css';
import textareaStyles from './TextareaInput.module.css';
import { darkTheme } from 'styles/theme';

export interface TextareaInputProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix'> {
    label?: React.ReactNode;
    helpText?: React.ReactNode;
    validationMessage?: React.ReactNode;
    characterLimit?: number;
    variant?: 'normal' | 'floating' | 'outlined' | 'filled' | 'underlined' | 'rounded';
    inputState?: 'default' | 'hover' | 'focus' | 'disabled' | 'readonly' | 'error' | 'success' | 'loading';
    onValidate?: (value: string) => string | null;
    wrapperStyle?: React.CSSProperties;
    textareaStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    helpTextStyle?: React.CSSProperties;
    validationMessageStyle?: React.CSSProperties;
    characterCountStyle?: React.CSSProperties;
    customClasses?: {
        wrapper?: string;
        textarea?: string;
        label?: string;
        helpText?: string;
        validationMessage?: string;
        characterCount?: string;
    };
}

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
    const { theme } = useTheme();
    const [value, setValue] = useState(() => (propValue as string) || '');
    const [isFocused, setIsFocused] = useState(false);
    const [inputState, setInputState] = useState(propInputState);
    const [validationMessage, setValidationMessage] = useState(propValidationMessage);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const isDarkMode = theme.colors.background === darkTheme.colors.background;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        if (characterLimit && newValue.length > characterLimit) return;
        setValue(newValue);
        onChange && onChange(e);

        if (onValidate) {
            const validationResult = onValidate(newValue);
            setValidationMessage(validationResult);
            setInputState(validationResult ? 'error' : 'success');
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        setInputState('focus');
        props.onFocus && props.onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        setInputState(propInputState);
        props.onBlur && props.onBlur(e);
    };

    const textareaClassName = `
    ${styles.input}
    ${textareaStyles.textarea}
    ${styles[variant]}
    ${styles[inputState]}
    ${isFocused ? styles.focused : ''}
    ${value ? styles.hasValue : ''}
    ${isDarkMode ? styles.darkMode : ''}
    ${customClasses.textarea || ''}
    ${className || ''}
  `;

    const dynamicTextareaStyle = {
        ...textareaStyle,
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
    };

    return (
        <div
            className={`${styles.inputWrapper} ${styles[variant]} ${customClasses.wrapper || ''}`}
            style={{ ...wrapperStyle, '--primary-color': theme.colors.primary } as React.CSSProperties}
        >
            {label && (
                <label className={`${styles.label} ${customClasses.label || ''}`} style={labelStyle}>
                    {variant === 'floating' ? (
                        <span className={styles.floatingLabel}>{label}</span>
                    ) : (
                        label
                    )}
                </label>
            )}
            <div className={styles.inputContainer}>
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
            {helpText && (
                <p id={`${props.id}-help`} className={`${styles.helpText} ${customClasses.helpText || ''}`} style={helpTextStyle}>
                    {helpText}
                </p>
            )}
            {validationMessage && (
                <p
                    id={`${props.id}-validation`}
                    className={`${styles.validationMessage} ${customClasses.validationMessage || ''}`}
                    style={validationMessageStyle}
                >
                    {validationMessage}
                </p>
            )}
            {characterLimit && (
                <p className={`${styles.characterCount} ${customClasses.characterCount || ''}`} style={characterCountStyle}>
                    {value.length}/{characterLimit}
                </p>
            )}
        </div>
    );
};

export default TextareaInput;