# Input Component Package

A comprehensive and customizable Input component library for React applications, featuring multiple input types, variations, and states.

## Installation

```bash
npm install input-component
```

## Usage

```jsx
import React from 'react';
import { TextInput, EmailInput, PasswordInput, ThemeProvider } from 'input-component';

const MyForm = () => (
  <ThemeProvider>
    <form>
      <TextInput
        label="Username"
        placeholder="Enter your username"
        helpText="Choose a unique username"
        variant="outlined"
      />
      <EmailInput
        label="Email"
        placeholder="Enter your email"
        helpText="We'll never share your email"
        variant="floating"
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        helpText="Must be at least 8 characters long"
        variant="filled"
      />
    </form>
  </ThemeProvider>
);

export default MyForm;
```

## Components

- `TextInput`: For basic text input
- `PasswordInput`: For password input with optional show/hide toggle
- `EmailInput`: Optimized for email addresses
- `NumberInput`: For numerical input
- `DateInput`: Provides a date picker
- `TimeInput`: Allows time selection
- `DateTimeInput`: For selecting both date and time
- `MonthInput`: To select a month
- `SearchInput`: Optimized for search queries
- `UrlInput`: For website addresses
- `TelephoneInput`: For phone numbers
- `FileInput`: To upload files
- `TextareaInput`: For multiline text input

## Variants

- `normal`: Standard input field (default)
- `floating`: Placeholder transitions to a floating label on focus or input
- `outlined`: Input with a pronounced border
- `filled`: Input with a solid background color
- `underlined`: Input with only a bottom border
- `rounded`: Input with rounded corners

## States

- `default`: Standard state
- `hover`: When the cursor is over the input
- `focus`: When the input is being edited
- `disabled`: Input is inactive
- `readonly`: Content can be read but not changed
- `error`: Shows validation errors
- `success`: Indicates correct input
- `loading`: Indicates processing or validation

## Theming

The package includes a `ThemeProvider` component and a `useTheme` hook for managing light and dark modes.

```jsx
import { ThemeProvider, useTheme } from 'input-component';

const App = () => (
  <ThemeProvider>
    <MyComponent />
  </ThemeProvider>
);

const MyComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Your components here */}
    </div>
  );
};
```

## Customization

You can customize the appearance of the Input components by passing props such as `variant`, `inputState`, and others. Refer to the component prop types for all available options.

## Accessibility

This package is built with accessibility in mind, including proper labeling, ARIA attributes, and keyboard navigation support.

## License

MIT