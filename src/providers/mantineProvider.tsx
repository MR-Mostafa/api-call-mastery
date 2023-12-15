import type { ReactNode } from 'react';

import { ColorSchemeScript, MantineProvider as MantineProviderBase, localStorageColorSchemeManager } from '@mantine/core';

import { theme } from '~/config/theme';

const colorSchemeManager = localStorageColorSchemeManager({
	key: 'color-scheme',
});

export const MantineProvider = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<ColorSchemeScript defaultColorScheme='dark' />
			<MantineProviderBase
				defaultColorScheme='dark'
				colorSchemeManager={colorSchemeManager}
				theme={theme}
			>
				{children}
			</MantineProviderBase>
		</>
	);
};
