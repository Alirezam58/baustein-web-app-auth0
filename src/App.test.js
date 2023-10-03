import { render, screen } from '@testing-library/react';
import App from './App';

describe('rendering elements',()=>{
  test('renders Welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/willkommen/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('render email input', ()=>{
    render(<App />);
    const userElement = screen.getByPlaceholderText('Username')
    expect(userElement).toBeInTheDocument();
  })

  test('render password input', ()=>{
    render(<App />);
    const passwordElement = screen.getByPlaceholderText('Password')
    expect(passwordElement).toBeInTheDocument();
  })

  test('render button', ()=>{
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  })
})
