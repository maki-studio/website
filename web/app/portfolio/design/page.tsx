import type { Metadata } from 'next';
import DesignPortfolioPage from './design-portfolio-page';

export const metadata: Metadata = {
    title: 'Design Portfolio',
};

export default function Page() {
    return <DesignPortfolioPage />;
}