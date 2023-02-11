import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Link href="/listing">see listing</Link>
		</>
	);
}
