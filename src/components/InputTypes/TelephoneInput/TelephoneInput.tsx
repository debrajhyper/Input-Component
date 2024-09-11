import React from 'react';
import { Input, InputProps } from '../../Input';
import { validatePhone } from 'utils/validation';

export interface TelephoneInputProps extends Omit<InputProps, 'type' | 'onValidate'> { }

/**
 * TelephoneInput component
 *
 * A special case of the Input component that validates its value as a
 * phone number.
 *
 * @param props - The props for the component
 * @returns A JSX element representing the component
 */
export const TelephoneInput: React.FC<TelephoneInputProps> = (props) => {
    return (
        <Input
            {...props}
            type="tel"
            onValidate={validatePhone}
            placeholder={props?.placeholder || "123-456-7890"}
        />
    );
};

/**
 * The default export of the module, which is the TelephoneInput component
 */
export default TelephoneInput;