import React from 'react';
import { Input, InputProps } from '../Input';
import { validateNumber } from 'utils/validation';


export interface NumberInputProps extends Omit<InputProps, 'type'> {
    min?: number;
    max?: number;
}

export const NumberInput: React.FC<NumberInputProps & { min?: number; max?: number }> = ({ min, max, ...props }) => {
    const handleValidate = (value: string) => {
        return validateNumber(min, max, value);
    };

    return <Input {...props} type="number" onValidate={handleValidate} />;
};

export default NumberInput;