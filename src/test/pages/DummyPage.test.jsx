import React from 'react';
import { render } from '@testing-library/react';
import DummyPage from '@/pages/DummyPage';

describe('DummyPage', () => {
    test('renders Dummy Page text', () => {
        const { getByText } = render(<DummyPage />);
        const linkElement = getByText(/Dummy Page/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('has correct class names', () => {
        const { container } = render(<DummyPage />);
        const divElement = container.firstChild;
        expect(divElement).toHaveClass('text-center');
        expect(divElement).toHaveClass('text-2xl');
        expect(divElement).toHaveClass('mt-10');
    });
});