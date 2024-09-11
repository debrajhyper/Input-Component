import React, { useState } from 'react';
import {
    TextInput, PasswordInput, EmailInput, NumberInput, DateInput,
    TimeInput, DateTimeInput, MonthInput, SearchInput, UrlInput,
    TelephoneInput, FileInput, TextareaInput, ThemeProvider, useTheme
} from '../src';
import { IconUser, IconMail, IconPhone, IconLink, IconSun, IconMoon, IconBrandGithub, IconBrandNpm, IconFile } from '@tabler/icons-react';

/**
 * Showcase component
 * 
 * This component renders the main showcase page for the
 * rc-input-component library.
 */
const Showcase: React.FC = () => {
    // Get the current theme and the toggleTheme function
    const { theme, toggleTheme } = useTheme();

    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState('types');

    // Array of possible input variants
    const variants = [
        'normal',  // No background or border
        'floating',  // Label floats above the input
        'outlined',  // Input has a border
        'filled',  // Input has a background color
        'underlined',  // Input has an underline
        'rounded'  // Input has rounded corners
    ] as const;

    // Array of possible input states
    const states = [
        'default',  // Default state
        'hover',  // Hover state
        'focus',  // Focus state
        'disabled',  // Disabled state
        'readonly',  // Readonly state
        'error',  // Error state
        'success',  // Success state
        'loading'  // Loading state
    ] as const;

    /**
     * Section component
     * 
     * This component renders a single section in the showcase page.
     * It takes a title and children as props.
     */
    const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
        <section style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            height: 'fit-content',
            minHeight: '10.5rem',
        }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', marginTop: 0, color: theme.colors.primary }}>{title}</h3>
            {children}
        </section>
    );

    /**
     * TabButton component
     * 
     * This component renders a single tab button in the
     * showcase page. It takes a label, isActive, and onClick
     * as props.
     */
    const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
        <button
            onClick={onClick}
            style={{
                padding: '10px 20px',
                margin: '0 10px 20px 0',
                backgroundColor: isActive ? theme.colors.primary : 'transparent',
                color: isActive ? theme.colors.background : theme.colors.text,
                border: `2px solid ${theme.colors.primary}`,
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 600,
            }}
        >
            {label}
        </button>
    );

    return (
        <div style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
            minHeight: '100vh',
            fontFamily: theme.fonts.body,
        }}>
            <header style={{
                padding: '1rem 2rem',
                background: theme.colors.primary,
                color: theme.colors.background,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>Rc Input Component</h1>
                <div>
                    <a href="https://github.com/debrajhyper/Rc-Input-Component" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: theme.colors.background }}>
                        <IconBrandGithub size={24} />
                    </a>
                    <a href="https://www.npmjs.com/package/rc-input-component" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: theme.colors.background }}>
                        <IconBrandNpm size={24} />
                    </a>
                    <button onClick={toggleTheme} style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: theme.colors.background,
                    }}>
                        {theme.colors.background === '#ffffff' ? <IconMoon size={24} /> : <IconSun size={24} />}
                    </button>
                </div>
            </header>

            <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Versatile Input Components for React</h2>
                    <p style={{ fontSize: '1.2rem', color: theme.colors.secondary }}>Customizable, accessible, and feature-rich input components for your React applications.</p>
                </section>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem' }}>
                    <TabButton label="Input Types" isActive={activeTab === 'types'} onClick={() => setActiveTab('types')} />
                    <TabButton label="Variants" isActive={activeTab === 'variants'} onClick={() => setActiveTab('variants')} />
                    <TabButton label="States" isActive={activeTab === 'states'} onClick={() => setActiveTab('states')} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {activeTab === 'types' && (
                        <>
                            <Section title="Text Input">
                                <TextInput label="Text Input" placeholder="Enter text" icon={<IconUser />} />
                            </Section>
                            <Section title="Password Input">
                                <PasswordInput label="Password Input" placeholder="Enter password" />
                            </Section>
                            <Section title="Email Input">
                                <EmailInput label="Email Input" placeholder="Enter email" icon={<IconMail />} />
                            </Section>
                            <Section title="Number Input">
                                <NumberInput label="Number Input" placeholder="Enter number" min={0} max={100} />
                            </Section>
                            <Section title="Date Input">
                                <DateInput label="Date Input" />
                            </Section>
                            <Section title="Time Input">
                                <TimeInput label="Time Input" />
                            </Section>
                            <Section title="DateTime Input">
                                <DateTimeInput label="DateTime Input" />
                            </Section>
                            <Section title='Month Input'>
                                <MonthInput label='Month Input' />
                            </Section>
                            <Section title="Search Input">
                                <SearchInput label="Search Input" placeholder="Search..." />
                            </Section>
                            <Section title="URL Input">
                                <UrlInput label="URL Input" placeholder="Enter URL" icon={<IconLink />} />
                            </Section>
                            <Section title="Telephone Input">
                                <TelephoneInput label="Telephone Input" icon={<IconPhone />} />
                            </Section>
                            <Section title="File Input">
                                <FileInput label="File Input" icon={<IconFile />} multiple preview />
                            </Section>
                            <Section title="Textarea Input">
                                <TextareaInput label="Textarea Input" placeholder="Enter text" />
                            </Section>
                        </>
                    )}

                    {activeTab === 'variants' && (
                        <>
                            {variants.map((variant) => (
                                <Section key={variant} title={variant.charAt(0).toUpperCase() + variant.slice(1)}>
                                    <TextInput
                                        label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Input`}
                                        placeholder={`Enter text`}
                                        variant={variant}
                                    />
                                </Section>
                            ))}
                        </>
                    )}

                    {activeTab === 'states' && (
                        <>
                            {states.map((state) => (
                                <Section key={state} title={state.charAt(0).toUpperCase() + state.slice(1)}>
                                    <TextInput
                                        label={`${state.charAt(0).toUpperCase() + state.slice(1)} Input`}
                                        placeholder={`Enter text`}
                                        inputState={state}
                                        disabled={state === 'disabled'}
                                        readOnly={state === 'readonly'}
                                        validationMessage={state === 'error' ? 'This field has an error' : undefined}
                                    />
                                </Section>
                            ))}
                        </>
                    )}
                </div>
            </main>

            <footer style={{
                padding: '2rem',
                textAlign: 'center',
                borderTop: `1px solid ${theme.colors.secondary}20`,
                marginTop: '2rem',
            }}>
                <p>© 2024 Rc Input Component. Made with ❤️ <a target='_blank' href='https://www.linkedin.com/in/debrajkarmakar010'>Debraj Karmakar</a></p>
            </footer>
        </div>
    );
};

/**
 * ShowcaseWrapper component
 * 
 * This component wraps the Showcase component with the ThemeProvider
 * from the rc-input-component library.
 */
export const ShowcaseWrapper: React.FC = () => (
    <ThemeProvider>
        <Showcase />
    </ThemeProvider>
);