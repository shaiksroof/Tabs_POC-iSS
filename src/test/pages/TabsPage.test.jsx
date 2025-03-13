import React from 'react';
import { render } from '@testing-library/react';
import TabsPage from '@/pages/TabsPage';
import Heading from '@/components/Heading';
import HeadingSecondary from '@/components/HeadingSecondary';
import Paragraph from '@/components/Paragraph';
import Tabs from '@/components/Tabs';

vi.mock('@/components/Heading');
vi.mock('@/components/HeadingSecondary');
vi.mock('@/components/Paragraph');
vi.mock('@/components/Tabs');

describe('TabsPage', () => {
    it('renders without crashing', () => {
        render(<TabsPage />);
    });

    it('renders HeadingSecondary component with correct text', () => {
        HeadingSecondary.mockImplementation(({ text }) => <div>{text}</div>);
        const { getByText } = render(<TabsPage />);
        expect(getByText('LOREM IPSUM DOLOR SIT AMET')).toBeInTheDocument();
    });

    it('renders Heading component with correct text', () => {
        Heading.mockImplementation(({ text }) => <div>{text}</div>);
        const { getByText } = render(<TabsPage />);
        expect(getByText('consectetur adipiscing elit')).toBeInTheDocument();
    });

    it('renders Paragraph component with correct text', () => {
        Paragraph.mockImplementation(({ text }) => <div>{text}</div>);
        const { getByText } = render(<TabsPage />);
        expect(getByText('Donec suscipit ex eu faucibus laoreet. Nulla non neque mauris. Quisque molestie aliquam sem eget mattis. Suspendisse vehicula nisl non quam imperdiet fringilla. Sed sodales ante vel lectus vestibulum.')).toBeInTheDocument();
    });

    it('renders Tabs component', () => {
        Tabs.mockImplementation(() => <div>Tabs Component</div>);
        const { getByText } = render(<TabsPage />);
        expect(getByText('Tabs Component')).toBeInTheDocument();
    });
});