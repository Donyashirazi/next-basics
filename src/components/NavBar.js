import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className="full-container">
			<div className="logo">
				<h1>List</h1>
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
