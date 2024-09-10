import React from 'react';
import { Input, InputProps } from '../Input';
import { validatePhone } from 'utils/validation';

export interface TelephoneInputProps extends Omit<InputProps, 'type' | 'onValidate'> { }

export const TelephoneInput: React.FC<TelephoneInputProps> = (props) => {
    return <Input {...props} type="tel" onValidate={validatePhone} placeholder="123-456-7890" />;
};

export default TelephoneInput;