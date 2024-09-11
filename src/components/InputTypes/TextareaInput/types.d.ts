import { TextareaHTMLAttributes } from 'react';

interface TextareaInputProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix'> {
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