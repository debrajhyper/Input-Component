import { useState } from 'react';
import { Input, ThemeProvider, ShowcaseWrapper, PasswordInput } from 'input-component';

const customTheme = {
  borderColor: 'red',
  borderRadius: '8px',
  focusColor: '#5cb85c',
  textColor: '#333',
  helpTextColor: '#777',
  errorColor: '#d9534f',
  successColor: '#5cb85c',
  disabledColor: '#e9ecef',
  filledColor: '#f8f9fa',
  backgroundColor: '#ffffff',
};

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ maxWidth: '60%', margin: '0 auto', padding: '2rem' }}>
        {/* <h1>Input Component Test</h1>

        <h2>Custom Theme Input</h2>
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          helpText="We'll never share your email."
          icon={<span role="img" aria-label="email">✉️</span>}
          value={email}
          onChange={handleEmailChange}
          variant="floating"
        />

        <h2>Password Input with Toggle</h2>
        <PasswordInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          helpText="Must be at least 8 characters long."
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
        />

        <h2>Input with Character Limit</h2>
        <Input
          id="username"
          label="Username"
          placeholder="Choose a username"
          characterLimit={15}
          value={username}
          onChange={handleUsernameChange}
          variant="underlined"
        />

        <h2>Disabled Input</h2>
        <Input
          id="disabled"
          label="Disabled Input"
          placeholder="This input is disabled"
          disabled
        />

        <h2>Input with Validation</h2>
        <Input
          id="validation"
          label="Phone Number"
          placeholder="Enter your phone number"
          state={/^\d{10}$/.test(username) ? 'success' : 'error'}
          validationMessage={/^\d{10}$/.test(username) ? 'Valid phone number!' : 'Please enter a 10-digit phone number.'}
        /> */}

        <h2>Showcase Wrapper</h2>
        <ShowcaseWrapper />
      </div>
    </ThemeProvider>
  );
}

export default App;