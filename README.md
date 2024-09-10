# 🎛️ Input Component

A highly customizable, accessible, and feature-rich React input component library with support for multiple input types, states, and themes.

[![NPM Version](https://img.shields.io/npm/v/input-component.svg)](https://www.npmjs.com/package/input-component)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 13 input types: Text, Password, Email, Number, Date, Time, DateTime-Local, Month, Search, URL, Telephone, File, and Textarea
- 🖌️ 6 customizable variants: Normal, Floating Label, Outlined, Filled, Underlined, Rounded
- 🚦 8 different states: Default, Hover, Focus, Disabled, Read-Only, Error, Success, Loading
- 🌓 Dark mode support
- 🎭 Themeable with CSS variables
- ♿ Accessibility-friendly
- 📏 TypeScript support
- 📁 File input with drag and drop support and file preview
- 🛠️ Extensive customization options

## 🚀 Installation

```bash
npm install input-component
```

## 🏁 Quick Start

Wrap your app with the `ThemeProvider`:

```jsx
import { ThemeProvider } from 'input-component';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

Use the input components in your React components:

```jsx
import { TextInput, EmailInput, PasswordInput } from 'input-component';

function MyForm() {
  return (
    <form>
      <TextInput label="Name" placeholder="Enter your name" />
      <EmailInput 
        label="Email Address" 
        placeholder="Enter your email"
        helpText="We will never share your email."
        icon={<EmailIcon />}
        clearable={true}
        validationMessage="Please enter a valid email."
        characterLimit={255}
        prefix="@"
        suffix=".com"
        autocomplete="email"
        variant="floating"
        inputState="error"
      />
      <PasswordInput label="Password" placeholder="Enter your password" />
    </form>
  );
}
```

## 🧩 Available Components

- `<TextInput />`
- `<PasswordInput />`
- `<EmailInput />`
- `<NumberInput />`
- `<DateInput />`
- `<TimeInput />`
- `<DateTimeInput />`
- `<MonthInput />`
- `<SearchInput />`
- `<UrlInput />`
- `<TelephoneInput />`
- `<FileInput />`
- `<TextareaInput />`

## 🎨 Customization

### Variants

- `normal`: Standard input field
- `floating`: Placeholder transitions to floating label on focus/input
- `outlined`: Input with a pronounced border
- `filled`: Input with a solid background color
- `underlined`: Minimalist design with only a bottom border
- `rounded`: Input with rounded corners

```jsx
<TextInput variant="floating" label="Username" />
```

### States

- `default`: Standard state
- `hover`: Styles applied on hover
- `focus`: Styles applied when input is focused
- `disabled`: Input is inactive
- `readonly`: Content can be read but not edited
- `error`: Displays validation errors
- `success`: Indicates correct input
- `loading`: Shows a loading state

```jsx
<TextInput inputState="error" validationMessage="This field is required" />
```

### Additional Features

- `icon`: Add an icon inside the input
- `clearable`: Add a clear button to reset input
- `characterLimit`: Set and display character limit
- `prefix/suffix`: Add text or icons at the start/end of input
- `mask`: Format input in a specific pattern

```jsx
<TextInput 
  icon={<UserIcon />}
  clearable={true}
  characterLimit={50}
  prefix="$"
  suffix=".00"
  mask={(value) => value.replace(/\D/g, '')}
/>
```

## 🎭 Theming

Customize the theme by passing a theme object to the ThemeProvider:

```jsx
import { ThemeProvider, lightTheme } from 'input-component';

const customTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: '#007bff',
    secondary: '#6c757d',
  },
};

function App() {
  return (
    <ThemeProvider initialTheme="light" theme={customTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

## ♿ Accessibility

- Every input has an associated label
- Keyboard navigation support
- ARIA attributes for enhanced screen reader support
- Clear error identification for users with disabilities

## 🛠️ Development

To start the development server:

```bash
npm run dev
```

To build the package:

```bash
npm run build
```

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📚 Documentation

For full documentation and a showcase of all input variations, clone this repository and run:

```bash
npm run dev
```

This will start a development server with a showcase page demonstrating all input types, variations, and states.

---

Made with ❤️ by [Debraj Karmakar](https://www.linkedin.com/in/debrajkarmakar010/)