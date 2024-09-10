import React from 'react';
import {
    TextInput,
    PasswordInput,
    EmailInput,
    NumberInput,
    DateInput,
    TimeInput,
    DateTimeInput,
    MonthInput,
    SearchInput,
    UrlInput,
    TelephoneInput,
    FileInput,
    TextareaInput,
    ThemeProvider,
    useTheme
} from '../index';

const Showcase: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const variants = ['normal', 'floating', 'outlined', 'filled', 'underlined', 'rounded'] as const;
    const states = ['default', 'hover', 'focus', 'disabled', 'readonly', 'error', 'success', 'loading'] as const;

    return (
        <main style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
            padding: '2rem',
        }}>
            <button onClick={toggleTheme} style={{
                padding: '10px 20px',
                margin: '20px 0',
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}>
                Toggle Theme
            </button>

            <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Input Component Showcase</h1>

            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Input Types</h2>
            <TextInput label="Text Input" placeholder="Enter text" />
            <PasswordInput label="Password Input" placeholder="Enter password" />
            <EmailInput label="Email Input" placeholder="Enter email" />
            <NumberInput label="Number Input" placeholder="Enter number" />
            <DateInput label="Date Input" />
            <TimeInput label="Time Input" />
            <DateTimeInput label="DateTime Input" />
            <MonthInput label="Month Input" />
            <SearchInput label="Search Input" placeholder="Search..." />
            <UrlInput label="URL Input" placeholder="Enter URL" />
            <TelephoneInput label="Telephone Input" placeholder="Enter phone number" />
            <FileInput label="File Input" multiple preview />
            <TextareaInput label="Textarea Input" placeholder="Enter multiple lines of text" />

            <br />

            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Variants</h2>
            {variants.map((variant) => (
                <div key={variant} style={{ marginBottom: '20px' }}>
                    <h3>{variant.charAt(0).toUpperCase() + variant.slice(1)}</h3>
                    <TextInput label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Input`} placeholder={`Enter text`} variant={variant} />
                </div>
            ))}

            <br />

            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>States</h2>
            {states.map((state) => (
                <div key={state} style={{ marginBottom: '20px' }}>
                    <h3>{state.charAt(0).toUpperCase() + state.slice(1)}</h3>
                    <TextInput
                        label={`${state.charAt(0).toUpperCase() + state.slice(1)} Input`}
                        placeholder={`Enter text`}
                        inputState={state}
                        disabled={state === 'disabled'}
                        readOnly={state === 'readonly'}
                        validationMessage={state === 'error' ? 'This field has an error' : undefined}
                    />
                </div>
            ))}
        </main>
    );
};

export const ShowcaseWrapper: React.FC = () => (
    <ThemeProvider>
        <Showcase />
    </ThemeProvider>
);