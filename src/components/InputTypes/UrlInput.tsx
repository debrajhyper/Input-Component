import React from 'react';
import { Input, InputProps } from '../Input';
import { validateUrl } from 'utils/validation';

export interface UrlInputProps extends Omit<InputProps, 'type' | 'onValidate'> { }

export const UrlInput: React.FC<UrlInputProps> = (props) => {
    return <Input {...props} type="url" onValidate={validateUrl} />;
};

export default UrlInput;