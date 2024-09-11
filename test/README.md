# ![](./template/logo32.png) Rc Input Component

A highly customizable, accessible, and feature-rich React input component library with support for multiple input types, states, and themes.

[![NPM Version](https://img.shields.io/npm/v/rc-input-component.svg)](https://www.npmjs.com/package/rc-input-component)
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
npm install rc-input-component
```

## 🏁 Quick Start

Wrap your app with the `ThemeProvider`:

```jsx
import { ThemeProvider } from 'rc-input-component';

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
import { TextInput, EmailInput, PasswordInput } from 'rc-input-component';

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

## 🔧 Props

The Input Component accepts the following props:

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |
| wrapperStyle | React.CSSProperties | undefined | Custom styles for the wrapper element |
| inputStyle | React.CSSProperties | undefined | Custom styles for the input element |
| labelStyle | React.CSSProperties | undefined | Custom styles for the label |
| helpTextStyle | React.CSSProperties | undefined | Custom styles for the help text |
| validationMessageStyle | React.CSSProperties | undefined | Custom styles for the validation message |
| characterCountStyle | React.CSSProperties | undefined | Custom styles for the character count |
| prefixStyle | React.CSSProperties | undefined | Custom styles for the prefix |
| suffixStyle | React.CSSProperties | undefined | Custom styles for the suffix |
| customClasses | object | {} | Custom CSS classes for various parts of the component |

Additionally, the Input Component accepts all standard HTML input attributes.

## 🔧 Props for Each Input Component

Below are tables listing the props for each individual input component. Note that all components also accept standard HTML attributes corresponding to their input types.

### TextInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |

### PasswordInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |
| showPasswordToggle | boolean | true | Whether to show the password toggle button |

### EmailInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |

### NumberInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |
| min | number | undefined | The minimum value allowed |
| max | number | undefined | The maximum value allowed |
| step | number | undefined | The step value for the number input |

### DateInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| min | string | undefined | The minimum date allowed |
| max | string | undefined | The maximum date allowed |

### TimeInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| step | number | undefined | The step value for the time input (in seconds) |

### DateTimeInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| min | string | undefined | The minimum date and time allowed |
| max | string | undefined | The maximum date and time allowed |
| step | number | undefined | The step value for the time part (in seconds) |

### MonthInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| min | string | undefined | The minimum month allowed |
| max | string | undefined | The maximum month allowed |

### SearchInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |
| showSearchIcon | boolean | true | Whether to show the search icon |

### UrlInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |

### TelephoneInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| icon | React.ReactNode | undefined | Icon to display inside the input |
| clearable | boolean | false | Whether to show a clear button |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| prefix | React.ReactNode | undefined | Content to display before the input |
| suffix | React.ReactNode | undefined | Content to display after the input |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| mask | (value: string) => string | undefined | Function to mask/format the input value |

### FileInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \| 'underlined' \| 'rounded' | 'normal' | Visual variant of the input |
| inputState | 'default' \| 'hover' \| 'focus' \| 'disabled' \| 'readonly' \| 'error' \| 'success' \| 'loading' | 'default' | Current state of the input |
| onValidate | (value: string) => string \| null | undefined | Custom validation function |
| accept | string | undefined | File types to accept |
| multiple | boolean | false | Whether to allow multiple file selection |
| preview | boolean | false | Whether to show file preview |
| fileUploadText | React.ReactNode | undefined | Text to display for file upload |

### TextareaInput

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| label | React.ReactNode | undefined | Label for the input field |
| helpText | React.ReactNode | undefined | Additional help text displayed below the input |
| validationMessage | React.ReactNode | undefined | Validation or error message |
| characterLimit | number | undefined | Maximum number of characters allowed |
| variant | 'normal' \| 'floating' \| 'outlined' \| 'filled' \

### Usage Example

```jsx
<Input
  label="Username"
  helpText="Enter your username or email"
  icon={<UserIcon />}
  clearable={true}
  validationMessage="Username is required"
  characterLimit={50}
  prefix="@"
  suffix=".com"
  variant="outlined"
  inputState="default"
  onValidate={(value) => value.length < 3 ? "Username too short" : null}
  mask={(value) => value.toLowerCase()}
  wrapperStyle={{ marginBottom: '20px' }}
  inputStyle={{ fontWeight: 'bold' }}
/>
```

This example demonstrates many of the available props. Adjust as needed for your specific use case.

## 🎭 Theming

Customize the theme by passing a theme object to the ThemeProvider:

```jsx
import { ThemeProvider, lightTheme } from 'rc-input-component';

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