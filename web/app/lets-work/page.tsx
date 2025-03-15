import type { Metadata } from 'next';
import LetsWorkPage from './lets-work-page';

export const metadata: Metadata = {
    title: 'Lets Work on a Project',
};

export default function Page() {
    return <LetsWorkPage />;
}