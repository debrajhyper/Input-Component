import React from 'react';
import { Input, InputProps } from '../Input';

export interface TextInputProps extends Omit<InputProps, 'type'> { }

export const TextInput: React.FC<TextInputProps> = (props) => {
    return <Input {...props} type="text" />;
};

export default TextInput;