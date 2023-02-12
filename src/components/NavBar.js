import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
	return (
		<nav className="full-container">
			<div className="logo">
				<Image
					src="/pc.png"
					width={500}
					height={200}
				/>
			</div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/listing">Listing</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
