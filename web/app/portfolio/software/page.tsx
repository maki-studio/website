import type { Metadata } from 'next';
import SoftwarePortfolioPage from './software-portfolio-page';

export const metadata: Metadata = {
    title: 'Software Portfolio',
};

export default function Page() {
    return <SoftwarePortfolioPage />;
}