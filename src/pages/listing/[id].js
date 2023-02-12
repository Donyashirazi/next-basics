import React from 'react';
import styles from './all.module.css';

export const getStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	const paths = data.map((path) => {
		return {
			params: { id: path.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/users' + id
	);
	const data = await response.json();
	console.log('data');
	return {
		props: { user: data },
	};
};

const Details = ({ user }) => {
	return (
		<div
			style={{ background_color: 'red' }}
			className={styles.all}
		>
			<p>{user?.email}</p>
			<p>{user?.phone}</p>
		</div>
	);
};
export default Details;
