import React, { useState } from 'react';
import { useTheme } from 'hooks/useTheme';
import { Input, InputProps } from '../../Input';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

export interface PasswordInputProps extends Omit<InputProps, 'type'> {
    showPasswordToggle?: boolean;
}

/**
 * PasswordInput component
 *
 * @param {PasswordInputProps} props
 * @returns
 */
export const PasswordInput: React.FC<PasswordInputProps> = ({ showPasswordToggle = true, ...props }) => {
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    /**
     * Toggle button to show/hide password
     */
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    /**
     * Password toggle button
     */
    const passwordToggleButton = (
        <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {showPassword ? <IconEye color={theme.colors.text} /> : <IconEyeOff color={theme.colors.text} />}
        </button>
    );

    return (
        <Input
            {...props}
            type={showPassword ? 'text' : 'password'}
            suffix={showPasswordToggle ? passwordToggleButton : undefined}
        />
    );
};

export default PasswordInput;