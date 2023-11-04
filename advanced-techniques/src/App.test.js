import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App.js', () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getAllByDisplayValue(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });


})

test('shows image', () => {
    render(<App />);
    const image = screen.getByAltText('logo');
    expect(image).toBeEnabled();

});
