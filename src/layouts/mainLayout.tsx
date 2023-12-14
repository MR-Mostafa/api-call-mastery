import { Outlet } from 'react-router-dom';

import { AppShell, Container, Flex } from '@mantine/core';

import { ColorScheme } from '~/features/shared/colorScheme';
import { Navbar } from '~/features/shared/navbar';

const MainLayout = () => {
	return (
		<AppShell padding='lg'>
			<AppShell.Header pos='static'>
				<Container size='xl'>
					<Flex
						align='center'
						justify='space-between'
						gap='xs'
						py='xs'
					>
						<Flex
							align='center'
							justify='flex-start'
							gap='xs'
							component='nav'
						>
							<Navbar />
						</Flex>

						<ColorScheme />
					</Flex>
				</Container>
			</AppShell.Header>

			<AppShell.Main>
				<Container
					size='xl'
					pt='1rem'
					pb='2rem'
				>
					<Outlet />
				</Container>
			</AppShell.Main>
		</AppShell>
	);
};

export default MainLayout;
