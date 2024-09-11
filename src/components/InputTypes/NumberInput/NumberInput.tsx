import React from 'react';
import { Input, InputProps } from '../../Input';
import { validateNumber } from 'utils/validation';

export interface NumberInputProps extends Omit<InputProps, 'type'> {
    min?: number;
    max?: number;
}

/**
 * NumberInput
 * 
 * A NumberInput is a special case of the Input component that validates
 * its value as a number within a given range.
 * 
 * @see Input
 * @see validateNumber
 */
export const NumberInput: React.FC<NumberInputProps & { min?: number; max?: number }> = ({ min, max, ...props }) => {
    /**
     * handleValidate
     * 
     * Validates the input value as a number within the given range.
     * 
     * @param value the value to validate
     * @returns the validation result
     */
    const handleValidate = (value: string) => {
        return validateNumber(min, max, value);
    };

    return (
        <Input
            {...props}
            type="number"
            onValidate={handleValidate}
        />
    );
};

export default NumberInput;