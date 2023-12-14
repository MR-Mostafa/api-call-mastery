import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@mantine/core';

export const Navbar = () => {
	const { pathname } = useLocation();

	const handleActiveLink = useCallback(
		(href: string) => {
			return href === pathname ? 'light' : 'subtle';
		},
		[pathname],
	);

	return (
		<Button
			variant={handleActiveLink('/')}
			color='gray'
			component={Link}
			to='/'
			style={{
				pointerEvents: handleActiveLink('/') === 'light' ? 'none' : 'auto',
			}}
		>
			Index
		</Button>
	);
};
