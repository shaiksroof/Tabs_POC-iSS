import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from '@/components/Paragraph';

describe('Paragraph component', () => {
    it('renders the text passed as a prop', () => {
        const text = 'Hello, world!';
        const { getByText } = render(<Paragraph text={text} />);
        expect(getByText(text)).toBeInTheDocument();
    });

    it('applies the correct class names', () => {
        const text = 'Hello, world!';
        const { container } = render(<Paragraph text={text} />);
        const paragraphElement = container.firstChild;
        expect(paragraphElement).toHaveClass('text-lg');
        expect(paragraphElement).toHaveClass('text-center');
        expect(paragraphElement).toHaveClass('text-gray-600');
        expect(paragraphElement).toHaveClass('mt-4');
    });
});