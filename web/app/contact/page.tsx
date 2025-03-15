import type { Metadata } from 'next';
import ContactPage from './contact-page';

export const metadata: Metadata = {
    title: 'Contact Us',
};

export default function Page() {
    return <ContactPage />;
}