import React from 'react';
import { validateUrl } from 'utils/validation';
import { Input, InputProps } from '../../Input';

export interface UrlInputProps extends Omit<InputProps, 'type' | 'onValidate'> { }

/**
 * UrlInput component
 *
 * @remarks
 * This component is used to input a URL.
 *
 * @param {UrlInputProps} props
 * @returns
 */
export const UrlInput: React.FC<UrlInputProps> = (props) => {
    return <Input {...props} type="url" onValidate={validateUrl} />;
};

/**
 * Default export
 */
export default UrlInput;