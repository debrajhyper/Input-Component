import React, { useState, useRef, InputHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Input.module.css';
import { darkTheme } from 'styles/theme';
import { IconX } from '@tabler/icons-react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
    label?: React.ReactNode;
    helpText?: React.ReactNode;
    icon?: React.ReactNode;
    clearable?: boolean;
    validationMessage?: React.ReactNode;
    characterLimit?: number;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    fileUploadText?: React.ReactNode;
    variant?: 'normal' | 'floating' | 'outlined' | 'filled' | 'underlined' | 'rounded';
    inputState?: 'default' | 'hover' | 'focus' | 'disabled' | 'readonly' | 'error' | 'success' | 'loading';
    onValidate?: (value: string) => string | null;
    mask?: (value: string) => string;
    wrapperStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    helpTextStyle?: React.CSSProperties;
    validationMessageStyle?: React.CSSProperties;
    characterCountStyle?: React.CSSProperties;
    prefixStyle?: React.CSSProperties;
    suffixStyle?: React.CSSProperties;
    customClasses?: {
        wrapper?: string;
        inputWrapper?: string;
        input?: string;
        fileUploadText?: string;
        label?: string;
        helpText?: string;
        validationMessage?: string;
        characterCount?: string;
        prefix?: string;
        suffix?: string;
    };
}

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
    const { theme } = useTheme();
    const [value, setValue] = useState(() => {
        if (typeof propValue === 'number') {
            return propValue.toString();
        }
        return (propValue as string) || '';
    });
    const [isFocused, setIsFocused] = useState(false);
    const [inputState, setInputState] = useState(propInputState);
    const [validationMessage, setValidationMessage] = useState(propValidationMessage);
    const inputRef = useRef<HTMLInputElement>(null);
    const isDarkMode = theme.colors.background === darkTheme.colors.background;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;
        if (mask) {
            newValue = mask(newValue);
        }
        if (characterLimit && newValue.length > characterLimit) return;
        setValue(newValue);
        onChange && onChange(e);

        if (onValidate) {
            const validationResult = onValidate(newValue);
            setValidationMessage(validationResult);
            setInputState(validationResult ? 'error' : 'success');
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        setInputState('focus');
        props.onFocus && props.onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        setInputState(propInputState);
        props.onBlur && props.onBlur(e);
    };

    const handleClear = () => {
        setValue('');
        inputRef.current?.focus();
    };

    const inputClassName = `
    ${styles.input}
    ${styles[variant]}
    ${styles[inputState]}
    ${isFocused ? styles.focused : ''}
    ${value ? styles.hasValue : ''}
    ${prefix ? styles.hasPrefix : ''}
    ${suffix ? styles.hasSuffix : ''}
    ${isDarkMode ? styles.darkMode : ''}
    ${inputState === 'readonly' ? styles.readonly : ''}
    ${inputState === 'loading' ? styles.loading : ''}
    ${customClasses.input || ''}
    ${className || ''}
  `;

    const dynamicInputStyle = {
        ...inputStyle,
        paddingLeft: prefix ? 'calc(var(--spacing-medium) * 2 + 20px)' : undefined,
        paddingRight: suffix ? 'calc(var(--spacing-medium) * 2 + 20px)' : undefined,
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
    };

    return (
        <div
            className={`${styles.inputWrapper} ${customClasses.wrapper || ''}`}
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
            <div className={`${styles.inputContainer} ${customClasses.inputWrapper || ''}`}>
                {prefix && (
                    <span className={`${styles.prefix} ${customClasses.prefix || ''}`} style={prefixStyle}>
                        {prefix}
                    </span>
                )}
                {icon && <span className={styles.icon}>{icon}</span>}
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
                {inputState === 'loading' && (
                    <div className={styles.loadingSpinner}></div>
                )}
                {
                    fileUploadText && (
                        <span className={`${styles.fileUploadText} ${customClasses.fileUploadText || ''}`}>
                            {fileUploadText}
                        </span>
                    )
                }
                {!clearable && suffix && (
                    <span className={`${styles.suffix} ${customClasses.suffix || ''}`} style={suffixStyle}>
                        {suffix}
                    </span>
                )}
                {clearable && value && (
                    <button className={styles.clearButton} onClick={handleClear} aria-label="Clear input">
                        <IconX size={18} />
                    </button>
                )}
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