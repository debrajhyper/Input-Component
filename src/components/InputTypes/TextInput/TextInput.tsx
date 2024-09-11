import React from 'react';
import { Input, InputProps } from '../../Input';

export interface TextInputProps extends Omit<InputProps, 'type'> { }

/**
 * @description
 * TextInput component
 * @param {TextInputProps} props
 * @returns {React.ReactElement}
 */
export const TextInput: React.FC<TextInputProps> = (props) => {
    /**
     * @description
     * Return JSX.Element
     * @returns {React.ReactElement}
     */
    return <Input {...props} type="text" />;
};

/**
 * @description
 * Default export
 */
export default TextInput;