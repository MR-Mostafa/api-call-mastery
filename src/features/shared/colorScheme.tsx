import { Button, Group, useMantineColorScheme } from '@mantine/core';

import { IconMoon, IconSun } from '@tabler/icons-react';

export const ColorScheme = () => {
	const { setColorScheme } = useMantineColorScheme();

	return (
		<Group justify='center'>
			<Button
				variant='subtle'
				color='gray'
				px='xs'
				onClick={() => setColorScheme('dark')}
				darkHidden
			>
				<IconMoon stroke={1.5} />
			</Button>

			<Button
				variant='subtle'
				size='xs'
				color='gray'
				px='xs'
				onClick={() => setColorScheme('light')}
				lightHidden
			>
				<IconSun stroke={1.5} />
			</Button>
		</Group>
	);
};
