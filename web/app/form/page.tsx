import type { Metadata } from 'next';
import FormPage from './form-page';

export const metadata: Metadata = {
    title: 'Fill in Form',
};

export default function Page() {
    return <FormPage />;
}