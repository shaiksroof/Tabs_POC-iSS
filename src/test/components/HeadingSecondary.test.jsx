import React from 'react';
import { render } from '@testing-library/react';
import HeadingSecondary from '@/components/HeadingSecondary';

test('renders HeadingSecondary with provided text', () => {
    const { getByText } = render(<HeadingSecondary text="Test Heading" />);
    const headingElement = getByText(/Test Heading/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-4x4 font-bold text-center text-blue-500');
});