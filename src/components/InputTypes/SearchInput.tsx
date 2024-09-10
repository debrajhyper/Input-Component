import React from 'react';
import { Input, InputProps } from '../Input';
import { IconSearch } from '@tabler/icons-react';
import { useTheme } from 'hooks/useTheme';

export interface SearchInputProps extends Omit<InputProps, 'type'> {
    showSearchIcon?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ showSearchIcon = true, ...props }) => {
    const { theme } = useTheme();
    return (
        <Input
            {...props}
            type="Search"
            suffix={
                showSearchIcon ? (
                    <button
                        type="button"
                        aria-label='Search'
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
                        <IconSearch color={theme.colors.text} />
                    </button>
                ) : undefined
            }
        />
    );
};

export default SearchInput;