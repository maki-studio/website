import type { Metadata } from 'next';
import PortfolioPage from './portfolio-page';

export const metadata: Metadata = {
    title: 'Work Portfolio',
};

export default function Page() {
    return <PortfolioPage />;
}