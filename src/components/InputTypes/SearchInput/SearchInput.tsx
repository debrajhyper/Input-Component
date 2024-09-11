import React from 'react';
import { useTheme } from 'hooks/useTheme';
import { Input, InputProps } from '../../Input';
import { IconSearch } from '@tabler/icons-react';

export interface SearchInputProps extends Omit<InputProps, 'type'> {
    showSearchIcon?: boolean;
}

/**
 * SearchInput component
 *
 * @remarks
 * This component is a wrapper of the Input component with a default type of "Search" and a search icon on the right side.
 * The search icon can be hidden by setting the `showSearchIcon` prop to `false`.
 *
 * @param props - Props of the component
 */
export const SearchInput: React.FC<SearchInputProps> = ({ showSearchIcon = true, ...props }) => {
    const { theme } = useTheme();
    return (
        <Input
            {...props}
            type="Search"
            // The search icon is hidden by default, but can be shown by setting the `showSearchIcon` prop to `true`
            suffix={
                showSearchIcon ? (
                    <button
                        type="button"
                        aria-label='Search'
                        // The search icon is a button with no styles, but it needs to be a button for accessibility reasons
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