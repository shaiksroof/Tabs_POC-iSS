import React from 'react';
import { render } from '@testing-library/react';
import Heading from '@/components/Heading';

test('renders the heading with the correct text', () => {
    const { getByText } = render(<Heading text="Test Heading" />);
    const headingElement = getByText(/Test Heading/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-4xl font-bold text-center');
});