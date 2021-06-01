import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    it('render App component', () => {
        render(<App />);
        expect(screen.getByText(/Welcome to my app/i)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
    it('on change input', () => {
        render(<App />);
        expect(screen.queryByDisplayValue('login')).not.toBeInTheDocument();
        userEvent.type(screen.getByTestId('input'), 'login')
        expect(screen.getByDisplayValue('login')).toBeTruthy();
    })
})
