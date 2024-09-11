import React from 'react';
import { Input, InputProps } from '../../Input';
import { validateEmail } from 'utils/validation';

export interface EmailInputProps extends Omit<InputProps, 'type' | 'onValidate'> { }

/**
 * EmailInput component
 *
 * @remarks
 * This component is a wrapper around the {@link Input} component with some
 * default props set for email input types.
 *
 * @param props - The props for the component
 */
export const EmailInput: React.FC<EmailInputProps> = (props) => {
    return <Input {...props} type="email" onValidate={validateEmail} autoComplete="email" />;
};

/**
 * Default export for the EmailInput component
 */
export default EmailInput;