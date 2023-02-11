import './globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Home from './page';
import Layout from '@/components/Layout';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Layout />
		</html>
	);
}
