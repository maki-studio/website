import type { Metadata } from 'next';
import HomePage from './homepage';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return <HomePage/>;
}