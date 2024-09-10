import React from 'react';
import { Input, InputProps } from '../Input';
import { validateEmail } from 'utils/validation';

export interface EmailInputProps extends Omit<InputProps, 'type' | 'onValidate'> { }

export const EmailInput: React.FC<EmailInputProps> = (props) => {
    return <Input {...props} type="email" onValidate={validateEmail} autoComplete="email" />;
};

export default EmailInput;