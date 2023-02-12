import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	return {
		props: { users: data },
	};
};

const listing = ({ users }) => {
	return (
		<>
			<div>
				<h2>Listing</h2>
			</div>
			{users &&
				users.length &&
				users.map((user) => (
					<Link
						href={'/listing/' + user.id}
						key={user.id}
					>
						<h2>{user?.name}</h2>
					</Link>
				))}
		</>
	);
};

export default listing;
