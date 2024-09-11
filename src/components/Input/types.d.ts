import { InputHTMLAttributes } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
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