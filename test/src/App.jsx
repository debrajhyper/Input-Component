import { ThemeProvider, ShowcaseWrapper } from 'rc-input-component';

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
  return (
    <ThemeProvider theme={customTheme}>
        <ShowcaseWrapper />
    </ThemeProvider>
  );
}

export default App;